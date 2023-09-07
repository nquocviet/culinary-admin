'use client'

import { clsx } from '@mantine/core'
import {
	Inter as FontInter,
	Merriweather as FontMerriweather,
} from 'next/font/google'

import { siteConfig } from '@/config/site'
import { AppProvider } from '@/providers'

import '@/styles/globals.css'

const fontMerriweather = FontMerriweather({
	subsets: ['latin'],
	weight: ['300', '400', '700', '900'],
	variable: '--ff-merriweather',
})

const fontInter = FontInter({
	subsets: ['latin'],
	variable: '--ff-inter',
})

interface RootLayoutProps {
	children: React.ReactNode
}

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components'],
	authors: [
		{
			name: '',
			url: '',
		},
	],
	creator: '',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: '',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={clsx(fontMerriweather.variable, fontInter.variable)}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	)
}

export default RootLayout
