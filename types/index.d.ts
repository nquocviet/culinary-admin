import { DataTableColumn } from 'mantine-datatable'

export type MantineDataTableColumn<T extends Record<string, unknown>> =
	DataTableColumn<T>[]

export type SiteConfig = {
	name: string
	description: string
	url: string
	ogImage: string
	links: {
		twitter: string
		github: string
	}
}
