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
			styles={{
				root: {
					minHeight: '100vh',
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
				body: {
					overflow: 'hidden',
				},
			}}
			layout="alt"
			navbar={<Navbar opened={opened} toggle={toggle} />}
			footer={<Footer opened={opened} />}
		>
			<Container
				py={16}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
					height: '100%',
					gap: rem(24),
				}}
				fluid
			>
				{children}
			</Container>
		</AppShell>
	)
}

export default DashboardLayout
