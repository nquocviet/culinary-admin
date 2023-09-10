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
				display: 'inline-block',
				fontWeight: 'var(--fw-medium)' as 'normal',
				color: 'var(--gray-900)',
				wordBreak: 'break-word',
				cursor: 'default',
				fontSize: 'var(--fs-text-sm)',
				marginBottom: rem(6),
			}}
			{...props}
		>
			{text}
		</Text>
	)
}

export default Label
