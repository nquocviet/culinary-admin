import React, { ReactNode } from 'react'
import { Flex, FlexProps, rem } from '@mantine/core'

interface ModalActionProps extends FlexProps {
	children: ReactNode
	fluid?: boolean
}

const ModalAction = ({ children, fluid, ...props }: ModalActionProps) => {
	return (
		<Flex
			align="center"
			gap={12}
			justify="flex-end"
			sx={{
				marginBottom: rem(-8),
				padding: `${rem(16)} ${rem(24)}`,
				width: '100%',
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
