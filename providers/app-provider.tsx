'use client'

import React, { ReactNode } from 'react'
import { CacheProvider } from '@emotion/react'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider } from 'context/theme'

import { COLORS_THEME } from '@/constants/colors'
import { components } from '@/constants/components'
import { useGluedEmotionCache } from '@/hooks'

interface AppProviderProps {
	children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
	const cache = useGluedEmotionCache()

	return (
		<CacheProvider value={cache}>
			<MantineProvider
				emotionCache={cache}
				theme={{
					colors: COLORS_THEME,
					components,
					fontFamily: 'inherit',
					primaryColor: 'primary',
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				<ThemeProvider>{children}</ThemeProvider>
			</MantineProvider>
		</CacheProvider>
	)
}

export default AppProvider
