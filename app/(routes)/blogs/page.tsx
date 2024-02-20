'use client'

import React, { useCallback, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'
import Link from 'next/link'

import { PageTitle, Table } from '@/components'
import { ROUTES } from '@/config/routes'
import { BlogStatus } from '@/constants/blog'
import { PAGE_SIZE } from '@/constants/common'
import { BLOG_COLUMNS } from '@/lib/columns/blog'

import { AnalysisCharts, FormFilter } from './components'

const data = [...Array(10)].map((_, id) => ({
	author: {
		email: 'email@example.com',
		username: 'consectetur.elit',
	},
	categories: [...Array(4)].map(() => 'Healthy food'),
	id,
	status: BlogStatus.PUBLISHED,
	title: 'Healthy spaghetti bolognese with mushroom',
	updatedAt: new Date(),
}))

const ManageBlogsPage = () => {
	const [selectedRecords, setSelectedRecords] = useState<any>([])

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex align="stretch" direction="column" gap={24}>
			<Flex align="center" gap={8} justify="space-between">
				<PageTitle title="Manage Blogs" />
				<Button
					color="primary"
					component={Link}
					href={ROUTES.BLOGS.NEW}
					leftIcon={<Plus size={20} weight="bold" />}
					size="md"
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
				columns={BLOG_COLUMNS}
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

export default ManageBlogsPage
