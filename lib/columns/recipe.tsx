import { ActionIcon, Badge, Flex } from '@mantine/core'
import { PencilSimple, Trash } from '@phosphor-icons/react'

import { AvatarGroup, Chip } from '@/components'
import { MAX_TAGS_DISPLAY } from '@/constants/common'
import { RECIPE_STATUS } from '@/constants/recipe'
import { MantineDataTableColumn } from '@/types'
import { formatDate } from '@/utils'

const RecipeActions = () => {
	return (
		<Flex gap={8}>
			<ActionIcon>
				<PencilSimple size={20} />
			</ActionIcon>
			<ActionIcon>
				<Trash size={20} />
			</ActionIcon>
		</Flex>
	)
}

export const RECIPE_COLUMNS: MantineDataTableColumn<any> = [
	{
		accessor: 'title',
		title: 'Post title',
		width: '30%',
		render: ({ title }) => {
			return <p className="line-clamp-1">{title}</p>
		},
	},
	{
		accessor: 'author',
		title: 'Author',
		width: '25%',
		render: ({ author }) => {
			return (
				<AvatarGroup title={author.username} description={author.email}>
					EX
				</AvatarGroup>
			)
		},
	},
	{
		accessor: 'cuisine',
		title: 'Cuisine',
		render: ({ cuisine }) => {
			return <Chip label={cuisine} />
		},
	},
	{
		accessor: 'dishes',
		title: 'Categories',
		render: ({ dishes }) => {
			return (
				<Flex gap={4}>
					{dishes.slice(0, MAX_TAGS_DISPLAY).map((dish, key) => (
						<Chip key={key} label={dish} />
					))}
					{dishes.length > MAX_TAGS_DISPLAY && (
						<Chip label={`+${dishes.length - MAX_TAGS_DISPLAY}`} />
					)}
				</Flex>
			)
		},
	},
	{
		accessor: 'status',
		title: 'Status',
		width: 100,
		render: ({ status }) => {
			switch (status) {
				case RECIPE_STATUS.DRAFT:
					return <Badge color="gray">Draft</Badge>
				case RECIPE_STATUS.PUBLISHED:
					return <Badge color="green">Published</Badge>
				default:
					return '-'
			}
		},
	},
	{
		accessor: 'updatedAt',
		title: 'Last updated',
		width: 150,
		render: ({ updatedAt }) => {
			return formatDate(updatedAt)
		},
	},
	{
		accessor: 'action',
		title: '',
		render: () => <RecipeActions />,
	},
]
