'use client'

import React, { useCallback, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { PageTitle, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/common'
import { QuoteStatus } from '@/constants/quote'
import { QUOTE_COLUMNS } from '@/lib/columns/quote'

import { FormFilter, ModalAddEditQuote } from './components'

const data = [...Array(10)].map((_, id) => ({
	author: 'Eveniet Incidunt',
	id,
	position: 'Nulla id autem sit',
	quote:
		'Reiciendis tempore cumque natus quis quam vel sapiente aut labore maiores cupiditate sequi laborum obcaetia asis',
	status: QuoteStatus.PUBLISHED,
	updatedAt: new Date(),
}))

const ManageQuotesPage = () => {
	const [opened, { close, open }] = useDisclosure(false)
	const [selectedRecords, setSelectedRecords] = useState<any>([])

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex align="stretch" direction="column" gap={24}>
			<Flex align="center" gap={8} justify="space-between">
				<PageTitle title="Manage quotes" />
				<Button
					color="primary"
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
				columns={QUOTE_COLUMNS}
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
			<ModalAddEditQuote opened={opened} onClose={close} />
		</Flex>
	)
}

export default ManageQuotesPage
