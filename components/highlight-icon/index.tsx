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
	className?: string
	color?: HighlightIconColors
	icon: Icon
	size?: HighlightIconSizes
}

const iconSizes = {
	lg: 24,
	md: 20,
	sm: 16,
}

const useStyles = createStyles(
	(_, { color }: Pick<HighlightIconProps, 'color'>) => ({
		base: {
			alignItems: 'center',
			backgroundColor: `var(--${color}-100)`,
			borderColor: `var(--${color}-50)`,
			borderRadius: '50%',
			borderStyle: 'solid',
			color: `var(--${color}-600)`,
			display: 'inline-flex',
			justifyContent: 'center',
			padding: rem(4),
		},
		lg: {
			borderWidth: rem(8),
		},
		md: {
			borderWidth: rem(6),
		},
		sm: {
			borderWidth: rem(4),
		},
	})
)

const HighlightIcon = ({
	color = 'primary',
	icon,
	size = 'sm',
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
