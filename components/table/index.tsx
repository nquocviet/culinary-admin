import React from 'react'
import { Loader, rem, Text } from '@mantine/core'
import { DataTable, DataTableProps } from 'mantine-datatable'

type TableProps<T extends Record<string, unknown>> = DataTableProps<T> & {
	disableHead?: boolean
	minWidth?: number | string
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const Table = <T extends Record<string, unknown>>({
	columns,
	disableHead,
	fetching,
	minHeight,
	minWidth = 750,
	records,
	...rest
}: TableProps<T>) => {
	return (
		<DataTable
			borderColor="var(--gray-200)"
			columns={columns as any}
			fetching={fetching}
			minHeight={minHeight || 125}
			records={records}
			rowBorderColor="transparent"
			rowClassName="h-10"
			styles={() => ({
				header: {
					height: disableHead ? 0 : 40,
				},
				pagination: {
					marginTop: 'auto',
					padding: rem(16),
				},
			})}
			sx={{
				'& > div': {
					flex: 'unset',
				},
				'& > div:first-child': {
					overflow: 'unset',
				},
				'& table': {
					minWidth,
				},
				'& th:first-child, & td:first-child': {
					paddingLeft: rem(16),
				},
				'& th:last-child, & td:last-child': {
					paddingRight: rem(16),
				},
				'& thead th': {
					color: 'var(--gray-500) !important',
					fontSize: 'var(--fs-text-sm) !important',
					fontWeight: 'var(--fw-medium) !important' as 'normal',
				},
				flexGrow: 1,
				height: 'auto',
			}}
			{...rest}
			borderRadius="md"
			customLoader={
				(<Loader className="absolute top-[15%]" size="sm" />) as any
			}
			emptyState={
				(<Text className="-translate-y-2.5">No data to display</Text>) as any
			}
			noRecordsText=""
			withBorder={true}
		/>
	)
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export default Table
