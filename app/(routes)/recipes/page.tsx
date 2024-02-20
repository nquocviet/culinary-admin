'use client'

import React, { useCallback, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'
import Link from 'next/link'

import { PageTitle, Table } from '@/components'
import { ROUTES } from '@/config/routes'
import { PAGE_SIZE } from '@/constants/common'
import { RecipeStatus } from '@/constants/recipe'
import { RECIPE_COLUMNS } from '@/lib/columns/recipe'

import { AnalysisCharts, FormFilter } from './components'

const data = [...Array(10)].map((_, id) => ({
	author: {
		email: 'email@example.com',
		username: 'consectetur.elit',
	},
	cuisine: 'Central Asia',
	dishes: [...Array(4)].map(() => 'Breakfast'),
	id,
	status: RecipeStatus.PUBLISHED,
	title: 'Egg salad sandwich with avocado and tomato',
	updatedAt: new Date(),
}))

const ManageRecipesPage = () => {
	const [selectedRecords, setSelectedRecords] = useState<any>([])

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex align="stretch" direction="column" gap={24}>
			<Flex align="center" gap={8} justify="space-between">
				<PageTitle title="Manage Recipes" />
				<Button
					color="primary"
					component={Link}
					href={ROUTES.RECIPES.NEW}
					leftIcon={<Plus size={20} weight="bold" />}
					size="md"
				>
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
				columns={RECIPE_COLUMNS}
				fetching={false}
				minWidth={950}
				page={1}
				paginationSize="md"
				records={data}
				recordsPerPage={PAGE_SIZE}
				selectedRecords={selectedRecords}
				totalRecords={data?.length}
				onPageChange={() => null}
				onSelectedRecordsChange={setSelectedRecords}
			/>
		</Flex>
	)
}

export default ManageRecipesPage
