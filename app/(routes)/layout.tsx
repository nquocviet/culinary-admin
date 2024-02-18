'use client'

import React, { ReactNode } from 'react'
import { AppShell, Container, rem, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { Footer, Navbar } from '@/components'
import {
	ASIDE_WIDTH_COLLAPSE,
	ASIDE_WIDTH_DEFAULT,
	FOOTER_HEIGHT,
} from '@/constants/layout'

interface DashboardLayoutProps {
	children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	const theme = useMantineTheme()
	const [opened, { toggle }] = useDisclosure(true)
	const asideWidth = rem(opened ? ASIDE_WIDTH_DEFAULT : ASIDE_WIDTH_COLLAPSE)

	return (
		<AppShell
			footer={<Footer opened={opened} />}
			layout="alt"
			navbar={<Navbar opened={opened} toggle={toggle} />}
			styles={{
				body: {
					overflow: 'hidden',
				},
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.white,
					minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
					paddingBottom: '1rem',
					paddingLeft: `calc(${asideWidth} + ${rem(16)})`,
				},
				root: {
					minHeight: '100vh',
				},
			}}
		>
			<Container
				py={16}
				sx={{
					alignItems: 'stretch',
					display: 'flex',
					flexDirection: 'column',
					gap: rem(24),
					height: '100%',
				}}
				fluid
			>
				{children}
			</Container>
		</AppShell>
	)
}

export default DashboardLayout
