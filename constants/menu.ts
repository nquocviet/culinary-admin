import {
	Book,
	ChatDots,
	DotsThreeCircle,
	Flag,
	GearSix,
	Icon,
	Notebook,
	Notepad,
	PresentationChart,
	Question,
	Users,
} from '@phosphor-icons/react'

import { ROUTES } from '@/config/routes'

export type MenuItemType = {
	children?: MenuItemType[]
	highlight?: boolean
	href?: string
	icon?: Icon
	label: string
	opened?: boolean
}

export type MenuListType = Array<MenuItemType[]>

export const MENU_LIST: MenuListType = [
	[
		{
			href: ROUTES.HOME,
			icon: PresentationChart,
			label: 'Dashboard',
		},
		{
			children: [
				{
					href: ROUTES.RECIPES.LIST,
					label: 'Manage recipes',
				},
				{
					href: ROUTES.RECIPES.NEW,
					label: 'Create new',
				},
			],
			icon: Book,
			label: 'Recipes',
		},
		{
			children: [
				{
					href: ROUTES.BLOGS.LIST,
					label: 'Manage blogs',
				},
				{
					href: ROUTES.BLOGS.NEW,
					label: 'Create new',
				},
			],
			icon: Notepad,
			label: 'Blogs',
		},
		{
			children: [
				{
					href: ROUTES.USERS.LIST,
					label: 'Manage users',
				},
				{
					href: ROUTES.USERS.NEW,
					label: 'Create new',
				},
				{
					href: ROUTES.USERS.BLACKLIST,
					label: 'Blacklist',
				},
			],
			icon: Users,
			label: 'Users',
		},
		{
			href: ROUTES.FEEDBACKS,
			icon: ChatDots,
			label: 'Feedbacks',
		},
		{
			href: ROUTES.REPORTS,
			icon: Flag,
			label: 'Reports',
		},
		{
			children: [
				{
					href: ROUTES.QUOTES,
					label: 'Quotes',
				},
				{
					href: ROUTES.CUISINES,
					label: 'Cuisines',
				},
				{
					href: ROUTES.DISHES,
					label: 'Dishes',
				},
				{
					href: ROUTES.CATEGORIES,
					label: 'Categories',
				},
			],
			icon: DotsThreeCircle,
			label: 'Others',
		},
	],
	[
		{
			href: ROUTES.GUIDELINE,
			icon: Notebook,
			label: 'Guideline',
		},
		{
			href: ROUTES.HELP_CENTER,
			icon: Question,
			label: 'Help center',
		},
		{
			href: ROUTES.SETTINGS,
			icon: GearSix,
			label: 'Settings',
		},
	],
]
