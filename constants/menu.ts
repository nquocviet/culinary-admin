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

import { ROUTES } from '@/constants/routes'

export type MenuItemType = {
	label: string
	href?: string
	icon?: Icon
	children?: MenuItemType[]
	isChild?: boolean
	opened?: boolean
}

export type MenuListType = Array<MenuItemType[]>

export const MENU_LIST: MenuListType = [
	[
		{
			label: 'Dashboard',
			href: ROUTES.HOME,
			icon: PresentationChart,
		},
		{
			label: 'Recipes',
			icon: Book,
			children: [
				{
					label: 'Manage recipes',
					href: ROUTES.RECIPES.LIST,
				},
				{
					label: 'Create new',
					href: ROUTES.RECIPES.NEW,
				},
			],
		},
		{
			label: 'Blogs',
			icon: Notepad,
			children: [
				{
					label: 'Manage blogs',
					href: ROUTES.BLOGS.LIST,
				},
				{
					label: 'Create new',
					href: ROUTES.BLOGS.NEW,
				},
			],
		},
		{
			label: 'Users',
			icon: Users,
			children: [
				{
					label: 'Manage users',
					href: ROUTES.USERS.LIST,
				},
				{
					label: 'Create new',
					href: ROUTES.USERS.NEW,
				},
				{
					label: 'Blacklist',
					href: ROUTES.USERS.BLACKLIST,
				},
			],
		},
		{
			label: 'Feedbacks',
			href: ROUTES.FEEDBACKS,
			icon: ChatDots,
		},
		{
			label: 'Reports',
			href: ROUTES.REPORTS,
			icon: Flag,
		},
		{
			label: 'Others',
			icon: DotsThreeCircle,
			children: [
				{
					label: 'Quotes',
					href: ROUTES.QUOTES,
				},
				{
					label: 'Cuisines',
					href: ROUTES.CUISINES,
				},
				{
					label: 'Dishes',
					href: ROUTES.DISHES,
				},
				{
					label: 'Categories',
					href: ROUTES.CATEGORIES,
				},
			],
		},
	],
	[
		{
			label: 'Guideline',
			href: ROUTES.HELP_CENTER,
			icon: Notebook,
		},
		{
			label: 'Help center',
			href: ROUTES.HELP_CENTER,
			icon: Question,
		},
		{
			label: 'Settings',
			href: ROUTES.SETTINGS,
			icon: GearSix,
		},
	],
]
