import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ActionIcon, Button, Flex, rem, Text } from '@mantine/core'
import { MinusCircle, Plus } from '@phosphor-icons/react'

import { PageTitle, RichTextEditor, TextInput } from '@/components'
import { uuid } from '@/utils'

const createNewDirection = () => {
	const ingredient = {
		content: '',
		id: uuid(),
		title: '',
	}

	return ingredient
}

const DirectionSection = () => {
	const { control, setValue } = useFormContext()
	const { append, fields, remove } = useFieldArray({
		control,
		name: 'directions',
	})

	return (
		<Flex align="stretch" direction="column" gap={16}>
			<PageTitle order={2} title="Directions" divider />
			<Text>
				Enter directions below or{' '}
				<Text
					component="span"
					role="button"
					sx={{
						color: 'var(--primary-800)',
						cursor: 'pointer',
						display: 'inline-block',
						fontWeight: 'var(--fw-medium)' as 'normal',
					}}
				>
					Add several at once
				</Text>
			</Text>
			{fields.map((direction: any, index) => (
				<Flex
					align="stretch"
					direction="column"
					gap={12}
					key={direction.id}
					wrap="nowrap"
				>
					<Flex
						align="center"
						justify="space-between"
						sx={{ marginBottom: rem(-8) }}
					>
						<Text sx={{ fontWeight: 'var(--fw-semibold)' as 'bold' }}>
							Step {index + 1}
						</Text>
						<ActionIcon onClick={() => remove(index)}>
							<MinusCircle size={20} />
						</ActionIcon>
					</Flex>
					<TextInput
						control={control}
						label="Title"
						name={`directions[${index}].title`}
						placeholder="e.g. Make the barbecue sauce"
						size="md"
					/>
					<RichTextEditor
						content=""
						label="Content"
						name={`directions[${index}].content`}
						placeholder="e.g. Combine all ingredients in a large bowl…"
						setValue={setValue}
					/>
				</Flex>
			))}
			<div>
				<Button
					color="gray"
					leftIcon={<Plus size={20} />}
					size="md"
					variant="outline"
					onClick={() => append(createNewDirection())}
				>
					Add new step
				</Button>
			</div>
		</Flex>
	)
}

export default DirectionSection
