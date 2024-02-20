'use client'

import React, { useCallback, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'
import Link from 'next/link'

import { PageTitle, Table } from '@/components'
import { ROUTES } from '@/config/routes'
import { PAGE_SIZE } from '@/constants/common'
import { UserRole, UserStatus } from '@/constants/user'
import { USER_COLUMNS } from '@/lib/columns/user'

import { AnalysisCharts, FormFilter } from './components'

const data = [...Array(10)].map((_, id) => ({
	displayName: 'Consectetur Elit',
	email: 'email@example.com',
	id,
	role: UserRole.MANAGER,
	status: UserStatus.ACTIVE,
	updatedAt: new Date(),
	username: 'consectetur.elit',
}))

const ManageUsersPage = () => {
	const [selectedRecords, setSelectedRecords] = useState<any>([])

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex align="stretch" direction="column" gap={24}>
			<Flex align="center" gap={8} justify="space-between">
				<PageTitle title="Manage Users" />
				<Button
					color="primary"
					component={Link}
					href={ROUTES.USERS.NEW}
					leftIcon={<Plus size={20} weight="bold" />}
					size="md"
				>
					Add new user
				</Button>
			</Flex>
			<AnalysisCharts />
			<FormFilter
				selectedRecords={selectedRecords}
				setSelectedRecords={setSelectedRecords}
				onSubmit={onSubmit}
			/>
			<Table
				columns={USER_COLUMNS}
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

export default ManageUsersPage
