'use client'

import React, { useCallback, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { PageTitle, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/common'
import { QUOTE_STATUS } from '@/constants/quote'
import { QUOTE_COLUMNS } from '@/lib/columns/quote'

import { FormFilter, ModalAddEditQuote } from './components'

const data = [...Array(10)].map((_, id) => ({
	id,
	quote:
		'Reiciendis tempore cumque natus quis quam vel sapiente aut labore maiores cupiditate sequi laborum obcaetia asis',
	author: 'Eveniet Incidunt',
	position: 'Nulla id autem sit',
	status: QUOTE_STATUS.PUBLISHED,
	updatedAt: new Date(),
}))

const ManageQuotesPage = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [selectedRecords, setSelectedRecords] = useState<any>([])

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex direction="column" align="stretch" gap={24}>
			<Flex justify="space-between" align="center" gap={8}>
				<PageTitle title="Manage quotes" />
				<Button
					color="primary"
					size="md"
					leftIcon={<Plus size={20} weight="bold" />}
					onClick={open}
				>
					Add new quote
				</Button>
			</Flex>
			<FormFilter
				selectedRecords={selectedRecords}
				setSelectedRecords={setSelectedRecords}
				onSubmit={onSubmit}
			/>
			<Table
				records={data}
				columns={QUOTE_COLUMNS}
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
			<ModalAddEditQuote opened={opened} onClose={close} />
		</Flex>
	)
}

export default ManageQuotesPage
