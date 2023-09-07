import React, { useEffect, useMemo, useState } from 'react'
import { Collapse, Divider, Flex, Menu, NavLink, rem, Sx } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MENU_LIST, MenuItemType } from '@/constants/menu'
import { ROUTES } from '@/constants/routes'
import { hasChildren } from '@/utils'

interface SingleMenuProps extends MenuItemType {
	sx?: Sx
}

interface MainMenuProps {
	opened: boolean
}

const SingleMenu = ({
	label,
	href,
	icon: Icon,
	sx,
	highlight,
	opened,
}: SingleMenuProps) => {
	const pathname = usePathname()
	const active = useMemo(() => {
		if (!href) return false
		if (href === ROUTES.HOME) {
			return pathname === href
		}
		return pathname.includes(href)
	}, [pathname, href])

	return (
		<NavLink
			active={active}
			component={Link}
			href={href || ''}
			color="gray"
			label={opened ? label : ''}
			sx={{
				borderRadius: rem(6),
				lineHeight: rem(24),
				fontWeight: 'var(--fw-medium)' as 'normal',
				...sx,
				...(highlight &&
					active && {
						backgroundColor: 'transparent !important',
						color: 'var(--primary-700) !important',
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

const NestedMenu = ({ label, icon: Icon, children, opened }: MenuItemType) => {
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
				shadow="md"
				width={180}
				position="right-start"
				opened={menuOpened}
				onChange={setMenuOpened}
				withinPortal
			>
				<Menu.Target>
					<NavLink
						active={active}
						color="gray"
						label={opened ? label : ''}
						sx={{
							borderRadius: rem(6),
							lineHeight: rem(24),
							fontWeight: 'var(--fw-medium)' as 'normal',
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
				onClick={toggle}
				sx={{
					borderRadius: rem(6),
					lineHeight: rem(24),
					fontWeight: 'var(--fw-medium)' as 'normal',
				}}
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
							sx={{ paddingLeft: rem(48) }}
							opened={opened}
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
			direction="column"
			align="stretch"
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
