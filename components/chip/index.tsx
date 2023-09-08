import React from 'react'
import { createStyles, rem } from '@mantine/core'

type ChipVariants = 'outline' | 'contained'

interface ChipProps {
	label: string
	variant?: ChipVariants
}

const useStyles = createStyles(
	(_, { variant }: Pick<ChipProps, 'variant'>) => ({
		wrapper: {
			display: 'inline-block',
			borderRadius: rem(6),
			padding: `${rem(2)} ${rem(6)}`,
			fontSize: 'var(--fs-text-xs)',
			fontWeight: 'var(--fw-medium)' as 'normal',
			whiteSpace: 'nowrap',
			...(variant === 'outline' && {
				border: '1px solid var(--gray-300)',
			}),
			...(variant === 'contained' && {
				backgroundColor: 'var(--gray-100)',
			}),
		},
	})
)

const Chip = ({ label, variant = 'outline' }: ChipProps) => {
	const { classes } = useStyles({ variant })

	return <div className={classes.wrapper}>{label}</div>
}

export default Chip
