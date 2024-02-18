import React from 'react'
import { Grid, Paper, rem, Text } from '@mantine/core'
import { ArrowDown, ArrowUp } from '@phosphor-icons/react'
import { Catamaran as FontCatamaran } from 'next/font/google'
import Image from 'next/image'

import DeclineChart from '@/public/images/decline-chart.svg'
import IncreaseChart from '@/public/images/increase-chart.svg'
import { formatNumber } from '@/utils'

interface AnalysisGroupProps {
	comparison: 'day' | 'month' | 'year'
	percent: number
	status: 'increase' | 'decline'
	title: string
	total: number
}

const fontCatamaran = FontCatamaran({
	subsets: ['latin'],
	variable: '--ff-catamaran',
})

const AnalysisGroup = ({
	comparison,
	percent,
	status,
	title,
	total,
}: AnalysisGroupProps) => {
	const isDecline = status === 'decline'

	return (
		<Paper
			p="lg"
			sx={{
				borderColor: 'var(--gray-200) !important',
				borderRadius: rem(12),
			}}
			withBorder
		>
			<Text
				sx={{
					fontSize: 'var(--fs-text-md)',
					fontWeight: 'var(--fw-medium)' as 'normal',
					marginBottom: rem(16),
				}}
			>
				{title}
			</Text>
			<Grid align="stretch" gutter={16}>
				<Grid.Col span={7}>
					<Text
						className={fontCatamaran.variable}
						sx={{
							fontFamily: 'var(--ff-catamaran)',
							fontSize: 'var(--fs-display-md)',
							fontWeight: 'var(--fw-semibold)' as 'bold',
							marginBottom: rem(16),
						}}
					>
						{formatNumber(total)}
					</Text>
					<Text
						sx={{
							color: 'var(--gray-500)',
							fontSize: 'var(--fs-text-sm)',
							fontWeight: 'var(--fw-medium)' as 'normal',
						}}
					>
						<Text
							component="span"
							sx={{
								alignItems: 'center',
								color: isDecline ? 'var(--red-600)' : 'var(--green-600)',
								display: 'inline-flex',
								gap: rem(4),
								marginRight: rem(8),
								verticalAlign: 'middle',
							}}
						>
							{isDecline ? (
								<ArrowDown color="var(--red-600)" size={16} weight="bold" />
							) : (
								<ArrowUp color="var(--green-600)" size={16} weight="bold" />
							)}
							{percent}%
						</Text>
						vs last {comparison}
					</Text>
				</Grid.Col>
				<Grid.Col span={5}>
					<Image
						alt=""
						height={0}
						src={isDecline ? DeclineChart : IncreaseChart}
						style={{ height: '100%', width: '100%' }}
						width={0}
					/>
				</Grid.Col>
			</Grid>
		</Paper>
	)
}

export default AnalysisGroup
