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
				theme={{
					colors: COLORS_THEME,
					fontFamily: 'inherit',
					primaryColor: 'primary',
					components,
				}}
				emotionCache={cache}
				withGlobalStyles
				withNormalizeCSS
			>
				<ThemeProvider>{children}</ThemeProvider>
			</MantineProvider>
		</CacheProvider>
	)
}

export default AppProvider
