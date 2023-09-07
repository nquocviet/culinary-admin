import React from 'react'
import Image from 'next/image'

import LogoImg from '@/public/images/logo.png'

interface LogoProps {
	width?: number
	height?: number
	alt?: string
	className?: string
}

const Logo = ({
	width = 140,
	height = 45,
	alt = 'Culinary logo',
	className,
}: LogoProps) => {
	return (
		<Image
			src={LogoImg}
			width={width}
			height={height}
			alt={alt}
			className={className}
		/>
	)
}

export default Logo
