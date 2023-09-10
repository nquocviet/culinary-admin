import React from 'react'
import { Divider, Title, TitleProps } from '@mantine/core'

interface PageTitleProps extends TitleProps {
	title: string
	divider?: boolean
}

const PageTitle = ({
	title,
	order = 1,
	divider = false,
	...props
}: PageTitleProps) => {
	if (divider)
		return (
			<Divider
				labelPosition="left"
				label={
					<Title
						{...props}
						order={order}
						sx={{
							fontSize: 'var(--fs-display-xs)',
							fontFamily: 'var(--ff-merriweather)',
							...props.sx,
						}}
					>
						{title}
					</Title>
				}
			/>
		)

	return (
		<Title
			{...props}
			order={order}
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
