import React from 'react'
import { Flex, Footer as MantineFooter, Text } from '@mantine/core'

import { APP_NAME, CURRENT_YEAR } from '@/constants/common'
import {
	ASIDE_WIDTH_COLLAPSE,
	ASIDE_WIDTH_DEFAULT,
	FOOTER_HEIGHT,
} from '@/constants/layout'

interface FooterProps {
	opened: boolean
}

const Footer = ({ opened }: FooterProps) => {
	return (
		<MantineFooter
			fixed={false}
			height={FOOTER_HEIGHT}
			ml={{ xs: opened ? ASIDE_WIDTH_DEFAULT : ASIDE_WIDTH_COLLAPSE }}
			sx={{
				position: 'static',
			}}
		>
			<Flex
				align="center"
				justify="center"
				sx={{
					color: 'var(--gray-500)',
					height: '100%',
				}}
			>
				<Text align="center">
					&copy; {CURRENT_YEAR} {APP_NAME}. All rights reversed.
				</Text>
			</Flex>
		</MantineFooter>
	)
}

export default Footer
