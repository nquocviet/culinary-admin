// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: any = {
	NavLink: {
		styles: () => ({
			root: {
				'&[data-active]': {
					backgroundColor: 'var(--gray-100)',
					color: 'var(--gray-900)',
				},
			},
		}),
	},
}
