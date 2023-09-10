import { ActionIcon, Badge, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PencilSimple, Trash } from '@phosphor-icons/react'

import { AvatarGroup, Chip, ModalConfirm } from '@/components'
import { MAX_TAGS_DISPLAY } from '@/constants/common'
import { RECIPE_STATUS } from '@/constants/recipe'
import { MantineDataTableColumn } from '@/types'
import { formatDate } from '@/utils'

const BlogActions = ({ title }) => {
	const [opened, { open, close }] = useDisclosure(false)

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
				opened={opened}
				onClose={close}
				title={`Delete blog: “${title}”`}
				message="Are you sure you want to delete this blog? This action cannot be undone."
				confirmText="Delete"
			/>
		</>
	)
}

export const BLOG_COLUMNS: MantineDataTableColumn<any> = [
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
		width: '20%',
		render: ({ author }) => {
			return (
				<AvatarGroup title={author.username} description={author.email}>
					EX
				</AvatarGroup>
			)
		},
	},
	{
		accessor: 'categories',
		title: 'Categories',
		width: '20%',
		render: ({ categories }) => {
			return (
				<Flex gap={4}>
					{categories.slice(0, MAX_TAGS_DISPLAY).map((category, key) => (
						<Chip key={key} label={category} />
					))}
					{categories.length > MAX_TAGS_DISPLAY && (
						<Chip label={`+${categories.length - MAX_TAGS_DISPLAY}`} />
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
		width: 165,
		render: ({ updatedAt }) => {
			return formatDate(updatedAt)
		},
	},
	{
		accessor: 'action',
		title: '',
		render: (recipe) => <BlogActions {...recipe} />,
	},
]
