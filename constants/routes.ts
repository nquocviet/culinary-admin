export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	RECIPES: {
		LIST: '/recipes',
		NEW: '/recipes/new',
		EDIT: '/recipes/:slug/edit',
		PREVIEW: '/recipes/:slug/preview',
	},
	BLOGS: {
		LIST: '/blogs',
		NEW: '/blogs/new',
		EDIT: '/blogs/:slug/edit',
		PREVIEW: '/blogs/:slug/preview',
	},
	USERS: {
		LIST: '/users',
		NEW: '/users/new',
		EDIT: '/users/:username/edit',
		BLACKLIST: '/users/blacklist',
	},
	FEEDBACKS: '/feedbacks',
	REPORTS: '/reports',
	QUOTES: '/quotes',
	CUISINES: '/cuisines',
	DISHES: '/dishes',
	CATEGORIES: '/categories',
	GUIDELINE: '/guideline',
	HELP_CENTER: '/help-center',
	SETTINGS: '/settings',
} as const
