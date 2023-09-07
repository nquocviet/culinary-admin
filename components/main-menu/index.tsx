import React, { useMemo } from 'react'
import { Collapse, Divider, Flex, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MENU_LIST, MenuItemType } from '@/constants/menu'
import { ROUTES } from '@/constants/routes'
import { cn, hasChildren } from '@/utils'

interface SingleMenuProps extends MenuItemType {
	className?: string
}

interface MainMenuProps {
	opened: boolean
}

const SingleMenu = ({
	label,
	href,
	icon: Icon,
	className,
	isChild,
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
			className={cn(
				'rounded leading-6',
				isChild && active && '!bg-transparent !text-primary-500',
				className
			)}
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
	const [inOpened, { toggle }] = useDisclosure(active)

	return (
		<>
			<NavLink
				active={active}
				color="gray"
				label={opened ? label : ''}
				onClick={toggle}
				className="rounded font-medium leading-6"
				{...(Icon && {
					icon: <Icon size={24} weight={active ? 'fill' : 'regular'} />,
				})}
				{...(!opened && {
					styles: {
						icon: {
							marginRight: 0,
						},
					},
				})}
				{...(children &&
					opened && {
						rightSection: (
							<CaretRight
								size={16}
								className={cn(opened ? '-rotate-90' : 'rotate-90')}
							/>
						),
					})}
			/>
			{children && opened && (
				<Collapse in={inOpened} transitionDuration={150}>
					{children.map((item) => (
						<SingleMenu
							key={item.label}
							className="pl-12"
							opened={opened}
							isChild
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
			className="-ml-px font-medium"
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
