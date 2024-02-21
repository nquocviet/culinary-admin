'use client'

import React, { useCallback, useState } from 'react'
import { Flex } from '@mantine/core'

import { PageTitle, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/common'
import { UserRole, UserStatus } from '@/constants/user'
import { USER_BLACKLIST_COLUMNS } from '@/lib/columns/user'

import { FormFilter } from './components'

const data = [...Array(10)].map((_, id) => ({
	displayName: 'Consectetur Elit',
	email: 'email@example.com',
	id,
	role: UserRole.MANAGER,
	status: UserStatus.ACTIVE,
	updatedAt: new Date(),
	username: 'consectetur.elit',
}))

const UserBlacklistPage = () => {
	const [selectedRecords, setSelectedRecords] = useState<any>([])

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex align="stretch" direction="column" gap={24}>
			<PageTitle title="Blacklist" />
			<FormFilter
				selectedRecords={selectedRecords}
				setSelectedRecords={setSelectedRecords}
				onSubmit={onSubmit}
			/>
			<Table
				columns={USER_BLACKLIST_COLUMNS}
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

export default UserBlacklistPage
