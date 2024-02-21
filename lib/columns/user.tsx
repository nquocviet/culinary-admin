import { ActionIcon, Badge, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PencilSimple, Prohibit } from '@phosphor-icons/react'
import { IconTrash } from '@tabler/icons-react'

import { AvatarGroup, Chip, ModalConfirm } from '@/components'
import { UserRole, UserStatus } from '@/constants/user'
import { MantineDataTableColumn } from '@/types'
import { formatDate } from '@/utils'

const UserActions = ({ username }) => {
	const [opened, { close, open }] = useDisclosure(false)

	return (
		<>
			<Flex gap={4}>
				<ActionIcon size="lg">
					<PencilSimple size={20} />
				</ActionIcon>
				<ActionIcon size="lg" onClick={open}>
					<IconTrash size={20} />
				</ActionIcon>
			</Flex>
			<ModalConfirm
				confirmText="Delete"
				message="Are you sure you want to delete this user? This action cannot be undone."
				opened={opened}
				title={`Delete user: “${username}”`}
				onClose={close}
			/>
		</>
	)
}

const UserBlacklistActions = ({ username }) => {
	const [
		modalUnblockOpened,
		{ close: closeUnblockModal, open: openUnblockModal },
	] = useDisclosure(false)
	const [
		modalDeleteOpened,
		{ close: closeDeleteModal, open: openDeleteModal },
	] = useDisclosure(false)

	return (
		<>
			<Flex gap={4}>
				<ActionIcon size="lg" onClick={openUnblockModal}>
					<Prohibit size={20} />
				</ActionIcon>
				<ActionIcon size="lg" onClick={openDeleteModal}>
					<IconTrash size={20} />
				</ActionIcon>
			</Flex>
			<ModalConfirm
				confirmText="Confirm"
				message="Are you sure you want to unblock this user? This user will be able to log back in and use Culinary normally."
				opened={modalUnblockOpened}
				title={`Unblock user: “${username}”`}
				type="warning"
				onClose={closeUnblockModal}
			/>
			<ModalConfirm
				confirmText="Delete"
				message="Are you sure you want to delete this user? This action cannot be undone."
				opened={modalDeleteOpened}
				title={`Delete user: “${username}”`}
				onClose={closeDeleteModal}
			/>
		</>
	)
}

export const USER_COLUMNS: MantineDataTableColumn<any> = [
	{
		accessor: 'username',
		render: ({ email, username }) => {
			return (
				<AvatarGroup description={email} title={username}>
					EX
				</AvatarGroup>
			)
		},
		title: 'Username & email',
		width: '35%',
	},
	{
		accessor: 'displayName',
		render: ({ displayName }) => {
			return <p className="line-clamp-1">{displayName}</p>
		},
		title: 'Display name',
		width: '25%',
	},
	{
		accessor: 'role',
		render: ({ role }) => {
			switch (role) {
				case UserRole.ADMIN:
					return <Chip label="Admin" />
				case UserRole.MANAGER:
					return <Chip label="Manager" />
				case UserRole.USER:
					return <Chip label="User" />
				default:
					return '-'
			}
		},
		title: 'Role',
		width: '15%',
	},
	{
		accessor: 'status',
		render: ({ status }) => {
			switch (status) {
				case UserStatus.ACTIVE:
					return <Badge color="green">Active</Badge>
				case UserStatus.INACTIVE:
					return <Badge color="gray">Inactive</Badge>
				case UserStatus.UNVERIFIED:
					return <Badge color="red">Unverified</Badge>
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
		render: (user) => <UserActions {...user} />,
		title: '',
	},
]

export const USER_BLACKLIST_COLUMNS: MantineDataTableColumn<any> = [
	{
		accessor: 'username',
		render: ({ email, username }) => {
			return (
				<AvatarGroup description={email} title={username}>
					EX
				</AvatarGroup>
			)
		},
		title: 'Username & email',
		width: '35%',
	},
	{
		accessor: 'displayName',
		render: ({ displayName }) => {
			return <p className="line-clamp-1">{displayName}</p>
		},
		title: 'Display name',
		width: '25%',
	},
	{
		accessor: 'role',
		render: ({ role }) => {
			switch (role) {
				case UserRole.ADMIN:
					return <Chip label="Admin" />
				case UserRole.MANAGER:
					return <Chip label="Manager" />
				case UserRole.USER:
					return <Chip label="User" />
				default:
					return '-'
			}
		},
		title: 'Role',
		width: '15%',
	},
	{
		accessor: 'status',
		render: ({ status }) => {
			switch (status) {
				case UserStatus.ACTIVE:
					return <Badge color="green">Active</Badge>
				case UserStatus.INACTIVE:
					return <Badge color="gray">Inactive</Badge>
				case UserStatus.UNVERIFIED:
					return <Badge color="red">Unverified</Badge>
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
		title: 'Blocked at',
		width: 165,
	},
	{
		accessor: 'action',
		render: (user) => <UserBlacklistActions {...user} />,
		title: '',
	},
]
