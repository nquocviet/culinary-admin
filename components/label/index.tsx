import React from 'react'
import { rem, Text } from '@mantine/core'

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
	text: string
}

const Label = ({ text, ...props }: LabelProps) => {
	return (
		<Text
			component="label"
			sx={{
				color: 'var(--gray-900)',
				cursor: 'default',
				display: 'inline-block',
				fontSize: 'var(--fs-text-sm)',
				fontWeight: 'var(--fw-medium)' as 'normal',
				marginBottom: rem(6),
				wordBreak: 'break-word',
			}}
			{...props}
		>
			{text}
		</Text>
	)
}

export default Label
