'use client'

import React, { useCallback, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

import { PageTitle, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/common'
import { RECIPE_STATUS } from '@/constants/recipe'
import { RECIPE_COLUMNS } from '@/lib/columns/recipe'

import { AnalysisCharts, FormFilter } from './components'

const data = [...Array(10)].map((_, id) => ({
	id,
	title: 'Egg salad sandwich with avocado and tomato',
	author: {
		username: 'consectetur.elit',
		email: 'email@example.com',
	},
	cuisine: 'Central Asia',
	dishes: [...Array(4)].map(() => 'Breakfast'),
	status: RECIPE_STATUS.PUBLISHED,
	updatedAt: new Date(),
}))

const ManageRecipesPage = () => {
	const [selectedRecords, setSelectedRecords] = useState<any>([])

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex direction="column" align="stretch" gap={24}>
			<Flex justify="space-between" align="center" gap={8}>
				<PageTitle title="Manage recipes" />
				<Button color="primary" leftIcon={<Plus size={16} weight="bold" />}>
					Add new recipe
				</Button>
			</Flex>
			<AnalysisCharts />
			<FormFilter
				selectedRecords={selectedRecords}
				setSelectedRecords={setSelectedRecords}
				onSubmit={onSubmit}
			/>
			<Table
				records={data}
				columns={RECIPE_COLUMNS}
				fetching={false}
				minWidth={950}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
				selectedRecords={selectedRecords}
				onSelectedRecordsChange={setSelectedRecords}
			/>
		</Flex>
	)
}

export default ManageRecipesPage
