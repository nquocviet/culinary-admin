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
	author: '',
	position: '',
	published: true,
	quote: '',
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
			confirmText="Save"
			rightActionSection={
				<Switch control={control} label="Publish" name="published" />
			}
			title="Add new quote"
			onConfirm={handleSubmit(onSubmit)}
			{...props}
		>
			<Flex align="stretch" direction="column" gap={16}>
				<Textarea
					control={control}
					label="Quote"
					minRows={4}
					name="quote"
					placeholder="Enter quote..."
					required
				/>
				<TextInput
					control={control}
					label="Author"
					name="author"
					placeholder="Enter author..."
					required
				/>
				<TextInput
					control={control}
					label="Position"
					name="position"
					placeholder="Enter position..."
					required
				/>
			</Flex>
		</Modal>
	)
}

export default ModalAddEditQuote
