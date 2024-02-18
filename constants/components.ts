import { ButtonStylesParams, rem } from '@mantine/core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const components: any = {
	Badge: {
		styles: () => ({
			root: {
				fontWeight: 'var(--fw-medium)',
				textTransform: 'capitalize',
			},
		}),
	},
	Button: {
		styles: (theme, params: ButtonStylesParams, { variant }) => ({
			leftIcon: {
				color:
					params.color === 'primary' && variant === 'filled'
						? theme.colors.black
						: undefined,
			},
			root: {
				borderColor:
					params.color === 'gray' && variant === 'outline'
						? theme.colors.gray[3]
						: undefined,
				color:
					params.color === 'primary' && variant === 'filled'
						? theme.colors.black
						: undefined,
			},
		}),
	},
	Divider: {
		styles: () => ({
			label: {
				'&::after': {
					borderColor: 'var(--gray-200)',
				},
			},
			vertical: {
				borderColor: 'var(--gray-300)',
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
	NumberInput: {
		styles: (theme) => ({
			input: {
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
				'&:focus': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
				borderColor: theme.colors.gray[3],
			},
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
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
	RichTextEditor: {
		styles: (theme) => ({
			content: {
				'& .is-editor-empty::before': {
					color: `${theme.colors.gray[4]} !important`,
				},
				'& > div': {
					height: '100% !important',
					paddingLeft: `${rem(14)} !important`,
					paddingRight: `${rem(14)} !important`,
				},
				'& a': {
					color: theme.colors.blue[5],
				},
				'&:has(.is-editor-empty)': {
					height: '1px',
				},
			},
			control: {
				'&:hover': {
					backgroundColor: `${theme.colors.gray[0]} !important`,
				},
				'&[data-active]': {
					'&:hover': {
						backgroundColor: `${theme.colors.primary[4]} !important`,
					},
					backgroundColor: theme.colors.primary[3],
					color: theme.colors.primary[8],
				},
				borderColor: 'transparent',
				borderRadius: `${rem(4)} !important`,
				height: 'auto',
				padding: rem(4),
			},
			controlsGroup: {
				gap: rem(6),
			},
			linkEditorExternalControl: {
				'&[data-active]': {
					'&:hover': {
						backgroundColor: `${theme.colors.primary[4]} !important`,
					},
					backgroundColor: theme.colors.primary[3],
					borderColor: theme.colors.primary[6],
					color: theme.colors.primary[8],
				},
			},
			root: {
				'&:focus-within': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
				borderColor: theme.colors.gray[3],
			},
			toolbar: {
				borderColor: theme.colors.gray[3],
				padding: `${rem(8)} ${rem(14)}`,
			},
		}),
	},
	Select: {
		styles: (theme) => ({
			input: {
				'&:focus': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
				'&[readonly]:focus': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				borderColor: theme.colors.gray[3],
			},
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
		}),
	},
	Switch: {
		styles: (theme) => ({
			label: {
				cursor: 'pointer',
			},
			thumb: {
				borderColor: theme.colors.white,
			},
			track: {
				borderColor: theme.colors.gray[2],
				cursor: 'pointer',
			},
		}),
	},
	TextInput: {
		styles: (theme) => ({
			input: {
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
				'&:focus': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
				'&[readonly]:focus': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				borderColor: theme.colors.gray[3],
			},
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
		}),
	},
	Textarea: {
		styles: (theme) => ({
			input: {
				'&::placeholder': {
					color: theme.colors.gray[4],
				},
				'&:focus': {
					borderColor: `${theme.colors.gray[5]} !important`,
				},
				'&[readonly]:focus': {
					borderColor: `${theme.colors.gray[3]} !important`,
				},
				borderColor: theme.colors.gray[3],
			},
			label: {
				fontSize: 'var(--fs-text-sm)',
				marginBottom: '0.375rem',
			},
		}),
	},
}
