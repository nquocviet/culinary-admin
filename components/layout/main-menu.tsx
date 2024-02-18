import React, { useEffect, useMemo, useState } from 'react'
import { Collapse, Divider, Flex, Menu, NavLink, rem, Sx } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES } from '@/config/routes'
import { MENU_LIST, MenuItemType } from '@/constants/menu'
import { hasChildren } from '@/utils'

interface SingleMenuProps extends MenuItemType {
	sx?: Sx
}

interface MainMenuProps {
	opened: boolean
}

const SingleMenu = ({
	highlight,
	href,
	icon: Icon,
	label,
	opened,
	sx,
}: SingleMenuProps) => {
	const pathname = usePathname()
	const active = useMemo(() => {
		if (!href) return false
		if (href === ROUTES.HOME) {
			return pathname === href
		}
		return pathname === href.split('?')[0]
	}, [pathname, href])

	return (
		<NavLink
			active={active}
			color="gray"
			component={Link}
			href={href || ''}
			label={opened ? label : ''}
			sx={{
				borderRadius: rem(6),
				fontWeight: 'var(--fw-medium)' as 'normal',
				lineHeight: rem(24),
				...sx,
				...(highlight &&
					active && {
						'&:hover': {
							backgroundColor: 'var(--gray-50) !important',
						},
						backgroundColor: 'transparent !important',
						color: 'var(--primary-800) !important',
					}),
			}}
			{...(!opened && {
				styles: {
					icon: {
						marginRight: 0,
					},
				},
			})}
			{...(Icon && {
				icon: <Icon size={24} weight={active ? 'fill' : 'regular'} />,
			})}
		/>
	)
}

const NestedMenu = ({ children, icon: Icon, label, opened }: MenuItemType) => {
	const pathname = usePathname()
	const active = useMemo(() => {
		return children?.some(({ href }) => {
			if (!href) return false
			return pathname.includes(href)
		})
	}, [pathname, children])
	const [menuOpened, setMenuOpened] = useState(false)
	const [inOpened, { toggle }] = useDisclosure(active)

	useEffect(() => {
		if (!opened) {
			setMenuOpened(false)
		}
	}, [opened])

	if (!opened) {
		return (
			<Menu
				opened={menuOpened}
				position="right-start"
				shadow="md"
				width={180}
				withinPortal
				onChange={setMenuOpened}
			>
				<Menu.Target>
					<NavLink
						active={active}
						color="gray"
						label={opened ? label : ''}
						sx={{
							borderRadius: rem(6),
							fontWeight: 'var(--fw-medium)' as 'normal',
							lineHeight: rem(24),
						}}
						{...(Icon && {
							icon: <Icon size={24} weight={active ? 'fill' : 'regular'} />,
						})}
						styles={{
							icon: {
								marginRight: 0,
							},
						}}
					/>
				</Menu.Target>
				<Menu.Dropdown>
					{children?.map((item) => (
						<SingleMenu key={item.label} opened={true} highlight {...item} />
					))}
				</Menu.Dropdown>
			</Menu>
		)
	}

	return (
		<>
			<NavLink
				active={active}
				color="gray"
				label={opened ? label : ''}
				sx={{
					borderRadius: rem(6),
					fontWeight: 'var(--fw-medium)' as 'normal',
					lineHeight: rem(24),
				}}
				onClick={toggle}
				{...(Icon && {
					icon: <Icon size={24} weight={active ? 'fill' : 'regular'} />,
				})}
				{...(children &&
					opened && {
						rightSection: (
							<CaretRight
								size={16}
								style={{
									transform: `rotate(${opened ? -90 : 90})`,
								}}
							/>
						),
					})}
			/>
			{children && opened && (
				<Collapse in={inOpened} transitionDuration={150}>
					{children.map((item) => (
						<SingleMenu
							key={item.label}
							opened={opened}
							sx={{ paddingLeft: rem(48) }}
							highlight
							{...item}
						/>
					))}
				</Collapse>
			)}
		</>
	)
}

const MenuItem = (props: MenuItemType) => {
	const Component = hasChildren(props) ? NestedMenu : SingleMenu

	return <Component {...props} />
}

const MainMenu = ({ opened }: MainMenuProps) => {
	return (
		<Flex
			align="stretch"
			direction="column"
			gap={6}
			sx={{
				marginLeft: '-1px',
			}}
		>
			{MENU_LIST.map((menu, index) => {
				const isLast = index === MENU_LIST.length - 1

				return (
					<React.Fragment key={index}>
						{menu.map((item, key) => (
							<MenuItem key={key} opened={opened} {...item} />
						))}
						{!isLast && <Divider color="gray.2" />}
					</React.Fragment>
				)
			})}
		</Flex>
	)
}

export default MainMenu
