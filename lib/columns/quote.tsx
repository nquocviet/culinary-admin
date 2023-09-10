import { ActionIcon, Badge, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PencilSimple, Trash } from '@phosphor-icons/react'

import { ModalAddEditQuote } from '@/app/(routes)/quotes/components'
import { ModalConfirm } from '@/components'
import { QUOTE_STATUS } from '@/constants/quote'
import { MantineDataTableColumn } from '@/types'
import { formatDate } from '@/utils'

const QuoteActions = (quote) => {
	const [deleteOpened, { open: openDelete, close: closeDelete }] =
		useDisclosure(false)
	const [editOpened, { open: openEdit, close: closeEdit }] =
		useDisclosure(false)

	return (
		<>
			<Flex gap={4}>
				<ActionIcon size="lg" onClick={openEdit}>
					<PencilSimple size={20} />
				</ActionIcon>
				<ActionIcon size="lg" onClick={openDelete}>
					<Trash size={20} />
				</ActionIcon>
			</Flex>
			<ModalConfirm
				opened={deleteOpened}
				onClose={closeDelete}
				title={`Delete quote: “${quote.quote}”`}
				message="Are you sure you want to delete this quote? This action cannot be undone."
				confirmText="Delete"
			/>
			<ModalAddEditQuote
				quote={quote}
				opened={editOpened}
				onClose={closeEdit}
			/>
		</>
	)
}

export const QUOTE_COLUMNS: MantineDataTableColumn<any> = [
	{
		accessor: 'quote',
		title: 'Quote',
		width: '35%',
		render: ({ quote }) => {
			return <p className="line-clamp-2">{quote}</p>
		},
	},
	{
		accessor: 'author',
		title: 'Author',
		width: '20%',
	},
	{
		accessor: 'position',
		title: 'Position',
		width: '20%',
	},
	{
		accessor: 'status',
		title: 'Status',
		width: 100,
		render: ({ status }) => {
			switch (status) {
				case QUOTE_STATUS.DRAFT:
					return <Badge color="gray">Draft</Badge>
				case QUOTE_STATUS.PUBLISHED:
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
		render: (quote) => <QuoteActions {...quote} />,
	},
]
