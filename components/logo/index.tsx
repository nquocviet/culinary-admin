import React from 'react'
import Image from 'next/image'

import LogoImg from '@/public/images/logo.png'

interface LogoProps {
	alt?: string
	className?: string
	height?: number
	width?: number
}

const Logo = ({
	alt = 'Culinary logo',
	className,
	height = 45,
	width = 140,
}: LogoProps) => {
	return (
		<Image
			alt={alt}
			className={className}
			height={height}
			src={LogoImg}
			width={width}
		/>
	)
}

export default Logo
