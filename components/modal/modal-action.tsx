import React, { ReactNode } from 'react'
import { Flex, FlexProps, rem } from '@mantine/core'

interface ModalActionProps extends FlexProps {
	children: ReactNode
	fluid?: boolean
}

const ModalAction = ({ children, fluid, ...props }: ModalActionProps) => {
	return (
		<Flex
			justify="flex-end"
			align="stretch"
			gap={12}
			sx={{
				marginBottom: rem(-8),
				width: '100%',
				padding: `${rem(16)} ${rem(24)}`,
				...props.sx,
				...(fluid && {
					'& > *': {
						flex: 1,
					},
				}),
			}}
			{...props}
		>
			{children}
		</Flex>
	)
}

export default ModalAction
