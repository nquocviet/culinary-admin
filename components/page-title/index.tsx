import React from 'react'
import { Divider, Title, TitleProps } from '@mantine/core'

interface PageTitleProps extends TitleProps {
	divider?: boolean
	title: string
}

const PageTitle = ({
	divider = false,
	order = 1,
	title,
	...props
}: PageTitleProps) => {
	if (divider)
		return (
			<Divider
				label={
					<Title
						{...props}
						order={order}
						sx={{
							fontFamily: 'var(--ff-merriweather)',
							fontSize: 'var(--fs-display-xs)',
							...props.sx,
						}}
					>
						{title}
					</Title>
				}
				labelPosition="left"
			/>
		)

	return (
		<Title
			{...props}
			order={order}
			sx={{
				fontFamily: 'var(--ff-merriweather)',
				fontSize: 'var(--fs-display-sm)',
				fontWeight: 'var(--fw-bold)' as 'normal',
				...props.sx,
			}}
		>
			{title}
		</Title>
	)
}

export default PageTitle
