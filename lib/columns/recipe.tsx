import { ActionIcon, Badge, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PencilSimple, Trash } from '@phosphor-icons/react'

import { AvatarGroup, Chip, ModalConfirm } from '@/components'
import { MAX_TAGS_DISPLAY } from '@/constants/common'
import { RecipeStatus } from '@/constants/recipe'
import { MantineDataTableColumn } from '@/types'
import { formatDate } from '@/utils'

const RecipeActions = ({ title }) => {
	const [opened, { close, open }] = useDisclosure(false)

	return (
		<>
			<Flex gap={4}>
				<ActionIcon size="lg">
					<PencilSimple size={20} />
				</ActionIcon>
				<ActionIcon size="lg" onClick={open}>
					<Trash size={20} />
				</ActionIcon>
			</Flex>
			<ModalConfirm
				confirmText="Delete"
				message="Are you sure you want to delete this recipe? This action cannot be undone."
				opened={opened}
				title={`Delete recipe: “${title}”`}
				onClose={close}
			/>
		</>
	)
}

export const RECIPE_COLUMNS: MantineDataTableColumn<any> = [
	{
		accessor: 'title',
		render: ({ title }) => {
			return <p className="line-clamp-1">{title}</p>
		},
		title: 'Post title',
		width: '30%',
	},
	{
		accessor: 'author',
		render: ({ author }) => {
			return (
				<AvatarGroup description={author.email} title={author.username}>
					EX
				</AvatarGroup>
			)
		},
		title: 'Author',
		width: '20%',
	},
	{
		accessor: 'cuisine',
		render: ({ cuisine }) => {
			return <Chip label={cuisine} />
		},
		title: 'Cuisine',
		width: '10%',
	},
	{
		accessor: 'dishes',
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
		title: 'Categories',
		width: '20%',
	},
	{
		accessor: 'status',
		render: ({ status }) => {
			switch (status) {
				case RecipeStatus.DRAFT:
					return <Badge color="gray">Draft</Badge>
				case RecipeStatus.PUBLISHED:
					return <Badge color="green">Published</Badge>
				default:
					return '-'
			}
		},
		title: 'Status',
		width: 100,
	},
	{
		accessor: 'updatedAt',
		render: ({ updatedAt }) => {
			return formatDate(updatedAt)
		},
		title: 'Last updated',
		width: 165,
	},
	{
		accessor: 'action',
		render: (recipe) => <RecipeActions {...recipe} />,
		title: '',
	},
]
