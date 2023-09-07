'use client'

import React, { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider } from 'context/theme'

import { COLORS_THEME } from '@/constants/colors'
import { components } from '@/constants/components'

interface AppProviderProps {
	children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<MantineProvider
			theme={{
				colors: COLORS_THEME,
				fontFamily: 'var(--ff-inter)',
				primaryColor: 'primary',
				components,
			}}
			withGlobalStyles
			withNormalizeCSS
		>
			<ThemeProvider>{children}</ThemeProvider>
		</MantineProvider>
	)
}

export default AppProvider
