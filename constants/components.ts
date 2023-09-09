import { ButtonStylesParams } from '@mantine/core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: any = {
	Badge: {
		styles: () => ({
			root: {
				textTransform: 'capitalize',
				fontWeight: 'var(--fw-medium)',
			},
		}),
	},
	Button: {
		styles: (theme, params: ButtonStylesParams, { variant }) => ({
			root: {
				color:
					params.color === 'primary' && variant === 'filled'
						? theme.colors.black
						: undefined,
				borderColor:
					params.color === 'gray' && variant === 'outline'
						? theme.colors.gray[3]
						: undefined,
			},
			leftIcon: {
				color:
					params.color === 'primary' && variant === 'filled'
						? theme.colors.black
						: undefined,
			},
		}),
	},
	Pagination: {
		styles: (theme) => ({
			control: {
				'&[data-active]': {
					color: theme.colors.black,
				},
			},
		}),
	},
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
	Select: {
		styles: (theme) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				'&[readonly]:focus': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				'&:not([readonly]):focus': {
					boxShadow: '0 0 0 4px var(--primary-100)',
				},
				'&[data-invalid]:focus': {
					boxShadow: '0 0 0 4px var(--red-100)',
				},
			},
		}),
	},
	TextInput: {
		styles: (theme) => ({
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
			input: {
				borderColor: theme.colors.gray[3],
				'&[readonly]:focus': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				'&:not([readonly]):focus': {
					boxShadow: '0 0 0 4px var(--primary-100)',
				},
				'&[data-invalid]:focus': {
					boxShadow: '0 0 0 4px var(--red-100)',
				},
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
			},
		}),
	},
}
