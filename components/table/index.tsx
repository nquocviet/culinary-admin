import React from 'react'
import { Loader, Text } from '@mantine/core'
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
			rowBorderColor="var(--gray-200)"
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
			}}
			styles={() => ({
				header: {
					height: disableHead ? 0 : 40,
				},
				pagination: {
					borderTopColor: 'transparent',
					marginTop: 'auto',
					paddingLeft: 0,
					paddingRight: 0,
				},
			})}
			{...rest}
			withBorder={false}
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
