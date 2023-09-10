import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ActionIcon, Button, Flex, rem, Text } from '@mantine/core'
import { MinusCircle, Plus } from '@phosphor-icons/react'

import { PageTitle, RichTextEditor, TextInput } from '@/components'
import { uuid } from '@/utils'

const createNewDirection = () => {
	const ingredient = {
		id: uuid(),
		title: '',
		content: '',
	}

	return ingredient
}

const DirectionSection = () => {
	const { control, setValue } = useFormContext()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'directions',
	})

	return (
		<Flex direction="column" align="stretch" gap={16}>
			<PageTitle order={2} title="Directions" divider />
			<Text>
				Enter directions below or{' '}
				<Text
					role="button"
					component="span"
					sx={{
						display: 'inline-block',
						cursor: 'pointer',
						fontWeight: 'var(--fw-medium)' as 'normal',
						color: 'var(--primary-800)',
					}}
				>
					Add several at once
				</Text>
			</Text>
			{fields.map((direction: any, index) => (
				<Flex
					key={direction.id}
					direction="column"
					align="stretch"
					wrap="nowrap"
					gap={12}
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
						name={`directions[${index}].title`}
						size="md"
						control={control}
						label="Title"
						placeholder="e.g. Make the barbecue sauce"
					/>
					<RichTextEditor
						name={`directions[${index}].content`}
						content=""
						label="Content"
						placeholder="e.g. Combine all ingredients in a large bowl…"
						setValue={setValue}
					/>
				</Flex>
			))}
			<div>
				<Button
					color="gray"
					variant="outline"
					size="md"
					leftIcon={<Plus size={20} />}
					onClick={() => append(createNewDirection())}
				>
					Add new step
				</Button>
			</div>
		</Flex>
	)
}

export default DirectionSection
