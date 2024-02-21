import React, { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Collapse, Flex, Grid, Menu, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	Check,
	CirclesThreePlus,
	Eraser,
	FunnelSimple,
	MagnifyingGlass,
	Prohibit,
	Trash,
	X,
} from '@phosphor-icons/react'

import { ModalConfirm, Select, TextInput } from '@/components'

interface FormFilterProps {
	onSubmit: (data) => void
	selectedRecords: any[]
	setSelectedRecords: Dispatch<SetStateAction<any[]>>
}

const FormFilter = ({
	onSubmit,
	selectedRecords,
	setSelectedRecords,
}: FormFilterProps) => {
	const [opened, { toggle }] = useDisclosure(false)
	const [
		modalUnblockOpened,
		{ close: closeUnblockModal, open: openUnblockModal },
	] = useDisclosure(false)
	const [
		modalDeleteOpened,
		{ close: closeDeleteModal, open: openDeleteModal },
	] = useDisclosure(false)
	const { control, handleSubmit } = useForm()

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex align="center" gap={8} justify="space-between">
					<Button
						color="gray"
						leftIcon={<FunnelSimple size={20} />}
						variant="outline"
						onClick={toggle}
					>
						More filters
					</Button>
					<Flex align="stretch" gap={12}>
						{Boolean(selectedRecords.length) && (
							<>
								<Button
									color="gray"
									leftIcon={<X size={20} />}
									variant="outline"
									onClick={() => setSelectedRecords([])}
								>
									Cancel
								</Button>
								<Menu shadow="md" width={240}>
									<Menu.Target>
										<Button
											color="gray"
											leftIcon={<CirclesThreePlus size={20} />}
											variant="filled"
										>
											Select action
										</Button>
									</Menu.Target>
									<Menu.Dropdown>
										<Menu.Item
											icon={<Prohibit size={20} />}
											onClick={openUnblockModal}
										>
											Unblock selected
										</Menu.Item>
										<Menu.Item
											icon={<Trash size={20} />}
											onClick={openDeleteModal}
										>
											Delete selected
										</Menu.Item>
									</Menu.Dropdown>
								</Menu>
							</>
						)}
						<TextInput
							control={control}
							icon={<MagnifyingGlass size={20} />}
							name="q"
							placeholder="Search..."
							w={280}
						/>
					</Flex>
				</Flex>
				<Collapse in={opened} sx={{ marginTop: rem(24) }}>
					<Grid>
						<Grid.Col span={4}>
							<Select
								control={control}
								data={[]}
								label="Role"
								name="role"
								placeholder="Select role"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								control={control}
								data={[]}
								label="Status"
								name="status"
								placeholder="Select status"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								control={control}
								data={[]}
								label="Sort by"
								name="sortOrder"
								placeholder="Select sort by"
							/>
						</Grid.Col>
					</Grid>
					<Flex gap={12} justify="flex-end" sx={{ marginTop: rem(24) }}>
						<Button
							color="gray"
							leftIcon={<Eraser size={20} weight="bold" />}
							variant="outline"
						>
							Clear all
						</Button>
						<Button
							color="primary"
							leftIcon={<Check size={20} weight="bold" />}
						>
							Apply
						</Button>
					</Flex>
				</Collapse>
			</form>
			<ModalConfirm
				confirmText="Confirm"
				message="Are you sure you want to unblock those users? Those users will be able to log back in and use Culinary normally."
				opened={modalUnblockOpened}
				title="Unblock all users selected"
				type="warning"
				onClose={closeUnblockModal}
			/>
			<ModalConfirm
				confirmText="Delete"
				message="Are you sure you want to delete those users? This action cannot be undone."
				opened={modalDeleteOpened}
				title="Delete all users selected"
				onClose={closeDeleteModal}
			/>
		</>
	)
}

export default FormFilter
