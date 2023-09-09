import React from 'react'
import { clsx, createStyles, rem } from '@mantine/core'
import { Icon } from '@phosphor-icons/react'

type HighlightIconColors =
	| 'primary'
	| 'gray'
	| 'blue'
	| 'red'
	| 'yellow'
	| 'green'

type HighlightIconSizes = 'sm' | 'md' | 'lg'

interface HighlightIconProps extends React.HTMLAttributes<HTMLSpanElement> {
	color?: HighlightIconColors
	size?: HighlightIconSizes
	icon: Icon
	className?: string
}

const iconSizes = {
	sm: 16,
	md: 20,
	lg: 24,
}

const useStyles = createStyles(
	(_, { color }: Pick<HighlightIconProps, 'color'>) => ({
		base: {
			display: 'inline-flex',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: '50%',
			borderStyle: 'solid',
			padding: rem(4),
			color: `var(--${color}-600)`,
			backgroundColor: `var(--${color}-100)`,
			borderColor: `var(--${color}-50)`,
		},
		sm: {
			borderWidth: rem(4),
		},
		md: {
			borderWidth: rem(6),
		},
		lg: {
			borderWidth: rem(8),
		},
	})
)

const HighlightIcon = ({
	color = 'primary',
	size = 'sm',
	icon,
	...rest
}: HighlightIconProps) => {
	const { classes } = useStyles({ color })
	const Icon = icon

	return (
		<span className={clsx(classes.base, classes[size])} {...rest}>
			<Icon size={iconSizes[size]} />
		</span>
	)
}

export default HighlightIcon
