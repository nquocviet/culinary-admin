import React from 'react'
import { Grid, Paper, rem, Text } from '@mantine/core'
import { ArrowDown, ArrowUp } from '@phosphor-icons/react'
import Image from 'next/image'

import DeclineChart from '@/public/images/decline-chart.svg'
import IncreaseChart from '@/public/images/increase-chart.svg'

interface AnalysisGroupProps {
	title: string
	total: number
	percent: number
	comparison: 'day' | 'month' | 'year'
	status: 'increase' | 'decline'
}

const AnalysisGroup = ({
	title,
	total,
	percent,
	comparison,
	status,
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
						sx={{
							fontSize: 'var(--fs-display-md)',
							fontWeight: 'var(--fw-semibold)' as 'bold',
							marginBottom: rem(16),
						}}
					>
						{total}
					</Text>
					<Text
						sx={{
							fontSize: 'var(--fs-text-sm)',
							fontWeight: 'var(--fw-medium)' as 'normal',
							color: 'var(--gray-500)',
						}}
					>
						<Text
							component="span"
							sx={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: rem(4),
								color: isDecline ? 'var(--red-600)' : 'var(--green-600)',
								marginRight: rem(8),
								verticalAlign: 'middle',
							}}
						>
							{isDecline ? (
								<ArrowDown size={16} color="var(--red-600)" weight="bold" />
							) : (
								<ArrowUp size={16} color="var(--green-600)" weight="bold" />
							)}
							{percent}%
						</Text>
						vs last {comparison}
					</Text>
				</Grid.Col>
				<Grid.Col span={5}>
					<Image
						src={isDecline ? DeclineChart : IncreaseChart}
						alt=""
						width={0}
						height={0}
						style={{ width: '100%', height: '100%' }}
					/>
				</Grid.Col>
			</Grid>
		</Paper>
	)
}

export default AnalysisGroup
