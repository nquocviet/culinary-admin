import React from 'react'
import { Grid } from '@mantine/core'

import { AnalysisGroup } from '@/components'

const AnalysisCharts = () => {
	return (
		<Grid gutter={24}>
			<Grid.Col span={4}>
				<AnalysisGroup
					comparison="month"
					percent={40}
					status="increase"
					title="Total recipes"
					total={2250}
				/>
			</Grid.Col>
			<Grid.Col span={4}>
				<AnalysisGroup
					comparison="day"
					percent={10}
					status="decline"
					title="Today's recipes"
					total={17}
				/>
			</Grid.Col>
			<Grid.Col span={4}>
				<AnalysisGroup
					comparison="day"
					percent={26}
					status="increase"
					title="Today's views"
					total={128}
				/>
			</Grid.Col>
		</Grid>
	)
}

export default AnalysisCharts
