import React, { ReactNode } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

interface AuthLayoutProps {
	children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div>
			<ProgressBar />
			{children}
		</div>
	)
}

export default AuthLayout
