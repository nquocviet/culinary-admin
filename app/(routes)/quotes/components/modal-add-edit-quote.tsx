import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import {
	Modal,
	ModalOpenedProps,
	Switch,
	Textarea,
	TextInput,
} from '@/components'

interface ModalAddEditQuoteProps extends ModalOpenedProps {
	quote?: any
}

const defaultValues = {
	quote: '',
	author: '',
	position: '',
	published: true,
}

const ModalAddEditQuote = ({ quote, ...props }: ModalAddEditQuoteProps) => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues,
	})

	useEffect(() => {
		if (quote) reset(quote)
		if (props.opened) return

		reset(defaultValues)
	}, [props.opened, quote, reset])

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<Modal
			title="Add new quote"
			confirmText="Save"
			rightActionSection={
				<Switch name="published" control={control} label="Publish" />
			}
			onConfirm={handleSubmit(onSubmit)}
			{...props}
		>
			<Flex direction="column" align="stretch" gap={16}>
				<Textarea
					name="quote"
					control={control}
					label="Quote"
					placeholder="Enter quote..."
					minRows={4}
					required
				/>
				<TextInput
					name="author"
					control={control}
					label="Author"
					placeholder="Enter author..."
					required
				/>
				<TextInput
					name="position"
					control={control}
					label="Position"
					placeholder="Enter position..."
					required
				/>
			</Flex>
		</Modal>
	)
}

export default ModalAddEditQuote
