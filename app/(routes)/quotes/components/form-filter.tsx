import React, { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MagnifyingGlass, Trash, X } from '@phosphor-icons/react'

import { ModalConfirm, TextInput } from '@/components'

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
	const [modalOpened, { close: closeModal, open: openModal }] =
		useDisclosure(false)
	const { control, handleSubmit } = useForm()

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex align="stretch" gap={12} justify="flex-end">
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
			</form>
			<ModalConfirm
				confirmText="Delete"
				message="Are you sure you want to delete those quotes? This action cannot be undone."
				opened={modalOpened}
				title="Delete all quotes selected"
				onClose={closeModal}
			/>
		</>
	)
}

export default FormFilter
