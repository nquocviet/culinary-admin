import React from 'react'
import { Title, TitleProps } from '@mantine/core'

interface PageTitleProps extends TitleProps {
	title: string
}

const PageTitle = ({ title, ...props }: PageTitleProps) => {
	return (
		<Title
			{...props}
			order={1}
			sx={{
				fontSize: 'var(--fs-display-sm)',
				fontFamily: 'var(--ff-merriweather)',
				fontWeight: 'var(--fw-bold)' as 'normal',
				...props.sx,
			}}
		>
			{title}
		</Title>
	)
}

export default PageTitle
