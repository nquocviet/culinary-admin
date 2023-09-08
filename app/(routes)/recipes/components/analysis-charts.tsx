import React from 'react'
import { Grid } from '@mantine/core'

import { AnalysisGroup } from '@/components'

const AnalysisCharts = () => {
	return (
		<Grid gutter={24}>
			<Grid.Col span={4}>
				<AnalysisGroup
					title="Total recipes"
					total={2250}
					percent={40}
					status="increase"
					comparison="month"
				/>
			</Grid.Col>
			<Grid.Col span={4}>
				<AnalysisGroup
					title="Today's recipes"
					total={17}
					percent={10}
					status="decline"
					comparison="day"
				/>
			</Grid.Col>
			<Grid.Col span={4}>
				<AnalysisGroup
					title="Today's views"
					total={128}
					percent={26}
					status="increase"
					comparison="day"
				/>
			</Grid.Col>
		</Grid>
	)
}

export default AnalysisCharts
