import {
	Merriweather as FontMerriweather,
	Open_Sans as OpenSans,
} from 'next/font/google'

import { siteConfig } from '@/config/site'
import { AppProvider } from '@/providers'

import '@/styles/globals.css'

const fontMerriweather = FontMerriweather({
	subsets: ['latin'],
	variable: '--ff-merriweather',
	weight: ['300', '400', '700', '900'],
})

const openSans = OpenSans({
	preload: true,
	subsets: ['latin'],
	variable: '--ff-open-sans',
})

interface RootLayoutProps {
	children: React.ReactNode
}

export const metadata = {
	authors: [
		{
			name: '',
			url: '',
		},
	],
	creator: '',
	description: siteConfig.description,
	icons: {
		apple: '/apple-touch-icon.png',
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
	},
	keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components'],
	manifest: `${siteConfig.url}/site.webmanifest`,
	openGraph: {
		description: siteConfig.description,
		locale: 'en_US',
		siteName: siteConfig.name,
		title: siteConfig.name,
		type: 'website',
		url: siteConfig.url,
	},
	themeColor: [
		{ color: 'white', media: '(prefers-color-scheme: light)' },
		{ color: 'black', media: '(prefers-color-scheme: dark)' },
	],
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	twitter: {
		card: 'summary_large_image',
		creator: '',
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		title: siteConfig.name,
	},
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={`${fontMerriweather.variable} ${openSans.variable}`}>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	)
}

export default RootLayout
