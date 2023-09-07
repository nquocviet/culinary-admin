'use client'

import React, { ReactNode } from 'react'
import { AppShell, Container, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { Footer, Navbar } from '@/components'
import { FOOTER_HEIGHT } from '@/constants/layout'

interface DashboardLayoutProps {
	children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	const theme = useMantineTheme()
	const [opened, { toggle }] = useDisclosure(true)

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
							: theme.colors.gray[0],
					minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
					paddingBottom: '1rem',
				},
				body: {
					overflow: 'hidden',
				},
			}}
			layout="alt"
			navbar={<Navbar opened={opened} toggle={toggle} />}
			footer={<Footer opened={opened} />}
		>
			<Container py={16} className="flex h-full flex-col items-stretch gap-6">
				{children}
			</Container>
		</AppShell>
	)
}

export default DashboardLayout
