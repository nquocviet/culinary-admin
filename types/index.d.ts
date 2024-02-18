import { DataTableColumn } from 'mantine-datatable'

export type MantineDataTableColumn<T extends Record<string, unknown>> =
	DataTableColumn<T>[]

export type SiteConfig = {
	description: string
	links: {
		github: string
		twitter: string
	}
	name: string
	ogImage: string
	url: string
}
