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
	selectedRecords: any[]
	setSelectedRecords: Dispatch<SetStateAction<any[]>>
	onSubmit: (data) => void
}

const FormFilter = ({
	selectedRecords,
	setSelectedRecords,
	onSubmit,
}: FormFilterProps) => {
	const [opened, { toggle }] = useDisclosure(false)
	const [modalOpened, { open: openModal, close: closeModal }] =
		useDisclosure(false)
	const { control, handleSubmit } = useForm()

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex justify="space-between" align="center" gap={8}>
					<Button
						color="gray"
						variant="outline"
						size="md"
						leftIcon={<FunnelSimple size={20} />}
						onClick={toggle}
					>
						More filters
					</Button>
					<Flex align="stretch" gap={12}>
						{Boolean(selectedRecords.length) && (
							<>
								<Button
									color="gray"
									variant="outline"
									size="md"
									leftIcon={<X size={20} />}
									onClick={() => setSelectedRecords([])}
								>
									Cancel
								</Button>
								<Button
									color="gray"
									variant="filled"
									size="md"
									leftIcon={<Trash size={20} />}
									onClick={openModal}
								>
									Delete selected
								</Button>
							</>
						)}
						<TextInput
							name="q"
							control={control}
							size="md"
							icon={<MagnifyingGlass size={20} />}
							w={280}
							placeholder="Search..."
						/>
					</Flex>
				</Flex>
				<Collapse in={opened} sx={{ marginTop: rem(24) }}>
					<Grid>
						<Grid.Col span={4}>
							<Select
								name="author"
								control={control}
								data={[]}
								size="md"
								label="Author"
								placeholder="Select author"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="cuisines"
								control={control}
								data={[]}
								size="md"
								label="Cuisines"
								placeholder="Select cuisines"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="categories"
								control={control}
								data={[]}
								size="md"
								label="Categories"
								placeholder="Select categories"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="serves"
								control={control}
								data={[]}
								size="md"
								label="Serves"
								placeholder="Select serves"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="status"
								control={control}
								data={[]}
								size="md"
								label="Status"
								placeholder="Select status"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="sortOrder"
								control={control}
								data={[]}
								size="md"
								label="Sort by"
								placeholder="Select sort by"
							/>
						</Grid.Col>
					</Grid>
					<Flex justify="flex-end" gap={12} sx={{ marginTop: rem(24) }}>
						<Button
							color="gray"
							variant="outline"
							size="md"
							leftIcon={<Eraser size={20} weight="bold" />}
						>
							Clear all
						</Button>
						<Button
							color="primary"
							size="md"
							leftIcon={<Check size={20} weight="bold" />}
						>
							Apply
						</Button>
					</Flex>
				</Collapse>
			</form>
			<ModalConfirm
				opened={modalOpened}
				onClose={closeModal}
				title="Delete all recipes selected"
				message="Are you sure you want to delete those recipes? This action cannot be undone."
				confirmText="Delete"
			/>
		</>
	)
}

export default FormFilter
