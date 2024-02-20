import { ActionIcon, Badge, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PencilSimple, Trash } from '@phosphor-icons/react'

import { ModalAddEditQuote } from '@/app/(routes)/quotes/components'
import { ModalConfirm } from '@/components'
import { QuoteStatus } from '@/constants/quote'
import { MantineDataTableColumn } from '@/types'
import { formatDate } from '@/utils'

const QuoteActions = (quote) => {
	const [deleteOpened, { close: closeDelete, open: openDelete }] =
		useDisclosure(false)
	const [editOpened, { close: closeEdit, open: openEdit }] =
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
				confirmText="Delete"
				message="Are you sure you want to delete this quote? This action cannot be undone."
				opened={deleteOpened}
				title={`Delete quote: “${quote.quote}”`}
				onClose={closeDelete}
			/>
			<ModalAddEditQuote
				opened={editOpened}
				quote={quote}
				onClose={closeEdit}
			/>
		</>
	)
}

export const QUOTE_COLUMNS: MantineDataTableColumn<any> = [
	{
		accessor: 'quote',
		render: ({ quote }) => {
			return <p className="line-clamp-2">{quote}</p>
		},
		title: 'Quote',
		width: '35%',
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
		render: ({ status }) => {
			switch (status) {
				case QuoteStatus.DRAFT:
					return <Badge color="gray">Draft</Badge>
				case QuoteStatus.PUBLISHED:
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
		render: (quote) => <QuoteActions {...quote} />,
		title: '',
	},
]
