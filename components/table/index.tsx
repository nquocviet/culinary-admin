import React from 'react'
import { Loader, rem, Text } from '@mantine/core'
import { DataTable, DataTableProps } from 'mantine-datatable'

type TableProps<T extends Record<string, unknown>> = DataTableProps<T> & {
	minWidth?: number | string
	disableHead?: boolean
}

const Table = <T extends Record<string, unknown>>({
	records,
	columns,
	fetching,
	minWidth = 750,
	minHeight,
	disableHead,
	...rest
}: TableProps<T>) => {
	return (
		<DataTable
			minHeight={minHeight || 125}
			records={records}
			fetching={fetching}
			borderColor="var(--gray-200)"
			rowBorderColor="transparent"
			rowClassName="h-10"
			sx={{
				height: 'auto',
				flexGrow: 1,
				'& > div': {
					flex: 'unset',
				},
				'& > div:first-child': {
					overflow: 'unset',
				},
				'& table': {
					minWidth,
				},
				'& thead th': {
					color: 'var(--gray-500) !important',
					fontSize: 'var(--fs-text-sm) !important',
					fontWeight: 'var(--fw-medium) !important' as 'normal',
				},
				'& th:first-child, & td:first-child': {
					paddingLeft: rem(16),
				},
				'& th:last-child, & td:last-child': {
					paddingRight: rem(16),
				},
			}}
			styles={() => ({
				header: {
					height: disableHead ? 0 : 40,
				},
				pagination: {
					marginTop: 'auto',
					padding: rem(16),
				},
			})}
			{...rest}
			withBorder={true}
			borderRadius="md"
			/* eslint-disable @typescript-eslint/no-explicit-any */
			columns={columns as any}
			customLoader={
				(<Loader size="sm" className="absolute top-[15%]" />) as any
			}
			emptyState={
				(<Text className="-translate-y-2.5">No data to display</Text>) as any
			}
			noRecordsText=""
		/>
	)
}

export default Table
