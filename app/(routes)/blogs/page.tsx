'use client'

import React, { useCallback, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'
import Link from 'next/link'

import { PageTitle, Table } from '@/components'
import { ROUTES } from '@/config/routes'
import { PAGE_SIZE } from '@/constants/common'
import { RECIPE_STATUS } from '@/constants/recipe'
import { BLOG_COLUMNS } from '@/lib/columns/blog'

import { AnalysisCharts, FormFilter } from './components'

const data = [...Array(10)].map((_, id) => ({
	id,
	title: 'Healthy spaghetti bolognese with mushroom',
	author: {
		username: 'consectetur.elit',
		email: 'email@example.com',
	},
	categories: [...Array(4)].map(() => 'Healthy food'),
	status: RECIPE_STATUS.PUBLISHED,
	updatedAt: new Date(),
}))

const ManageBlogsPage = () => {
	const [selectedRecords, setSelectedRecords] = useState<any>([])

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex direction="column" align="stretch" gap={24}>
			<Flex justify="space-between" align="center" gap={8}>
				<PageTitle title="Manage blogs" />
				<Button
					component={Link}
					href={ROUTES.BLOGS.NEW}
					color="primary"
					size="md"
					leftIcon={<Plus size={20} weight="bold" />}
				>
					Add new blog
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
				columns={BLOG_COLUMNS}
				fetching={false}
				minWidth={950}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				paginationSize="md"
				onPageChange={() => null}
				selectedRecords={selectedRecords}
				onSelectedRecordsChange={setSelectedRecords}
			/>
		</Flex>
	)
}

export default ManageBlogsPage
