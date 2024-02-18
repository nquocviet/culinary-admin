import React, { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Collapse, Flex, Grid, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	Check,
	Eraser,
	FunnelSimple,
	MagnifyingGlass,
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
	const [modalOpened, { close: closeModal, open: openModal }] =
		useDisclosure(false)
	const { control, handleSubmit } = useForm()

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex align="center" gap={8} justify="space-between">
					<Button
						color="gray"
						leftIcon={<FunnelSimple size={20} />}
						size="md"
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
									size="md"
									variant="outline"
									onClick={() => setSelectedRecords([])}
								>
									Cancel
								</Button>
								<Button
									color="gray"
									leftIcon={<Trash size={20} />}
									size="md"
									variant="filled"
									onClick={openModal}
								>
									Delete selected
								</Button>
							</>
						)}
						<TextInput
							control={control}
							icon={<MagnifyingGlass size={20} />}
							name="q"
							placeholder="Search..."
							size="md"
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
								label="Author"
								name="author"
								placeholder="Select author"
								size="md"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								control={control}
								data={[]}
								label="Categories"
								name="categories"
								placeholder="Select categories"
								size="md"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								control={control}
								data={[]}
								label="Reading time"
								name="readingTime"
								placeholder="Select reading time"
								size="md"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								control={control}
								data={[]}
								label="Status"
								name="status"
								placeholder="Select status"
								size="md"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								control={control}
								data={[]}
								label="Sort by"
								name="sortOrder"
								placeholder="Select sort by"
								size="md"
							/>
						</Grid.Col>
					</Grid>
					<Flex gap={12} justify="flex-end" sx={{ marginTop: rem(24) }}>
						<Button
							color="gray"
							leftIcon={<Eraser size={20} weight="bold" />}
							size="md"
							variant="outline"
						>
							Clear all
						</Button>
						<Button
							color="primary"
							leftIcon={<Check size={20} weight="bold" />}
							size="md"
						>
							Apply
						</Button>
					</Flex>
				</Collapse>
			</form>
			<ModalConfirm
				confirmText="Delete"
				message="Are you sure you want to delete those blogs? This action cannot be undone."
				opened={modalOpened}
				title="Delete all blogs selected"
				onClose={closeModal}
			/>
		</>
	)
}

export default FormFilter
