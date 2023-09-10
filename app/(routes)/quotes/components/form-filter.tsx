import React, { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MagnifyingGlass, Trash, X } from '@phosphor-icons/react'

import { ModalConfirm, TextInput } from '@/components'

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
	const [modalOpened, { open: openModal, close: closeModal }] =
		useDisclosure(false)
	const { control, handleSubmit } = useForm()

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex justify="flex-end" align="stretch" gap={12}>
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
			</form>
			<ModalConfirm
				opened={modalOpened}
				onClose={closeModal}
				title="Delete all quotes selected"
				message="Are you sure you want to delete those quotes? This action cannot be undone."
				confirmText="Delete"
			/>
		</>
	)
}

export default FormFilter
