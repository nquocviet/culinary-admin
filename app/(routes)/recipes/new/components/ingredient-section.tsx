import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { ActionIcon, Button, Flex, Text } from '@mantine/core'
import { DotsSixVertical, MinusCircle, Plus } from '@phosphor-icons/react'

import { PageTitle, TextInput } from '@/components'
import { IngredientType } from '@/constants/recipe'
import { uuid } from '@/utils'

const createNewIngredient = (
	type: keyof typeof IngredientType = IngredientType.HEADER
) => {
	const ingredient = {
		id: uuid(),
		title: '',
		type,
	}

	return ingredient
}

const IngredientSection = () => {
	const { control } = useFormContext()
	const { append, fields, remove, replace } = useFieldArray({
		control,
		name: 'ingredients',
	})

	const handleOnDragEnd = (result) => {
		if (!result.destination) return

		const items = Array.from(fields)
		const [reorderedItem] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, reorderedItem)

		replace(items)
	}

	return (
		<Flex align="stretch" direction="column" gap={16}>
			<PageTitle order={2} title="Ingredients" divider />
			<Text>
				Enter ingredients below or{' '}
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
			{Boolean(fields.length) && (
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<Droppable droppableId="ingredients">
						{(provided) => (
							<Flex
								align="stretch"
								direction="column"
								gap={16}
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{fields.map((ingredient: any, index) => (
									<Draggable
										draggableId={ingredient.id}
										index={index}
										key={ingredient.id}
									>
										{(provided) => (
											<Flex
												align="center"
												gap={8}
												ref={provided.innerRef}
												wrap="nowrap"
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<ActionIcon>
													<DotsSixVertical size={20} weight="bold" />
												</ActionIcon>
												<TextInput
													control={control}
													name={`ingredients[${index}].title`}
													placeholder={
														ingredient.type === IngredientType.HEADER
															? 'Add header, e.g. Sauce'
															: 'Add ingredient, e.g.  0.5 lb. shrimp'
													}
													styles={() => ({
														input: {
															...(ingredient.type === IngredientType.HEADER && {
																'&::placeholder': {
																	fontWeight: 'var(--fw-semibold)' as 'bold',
																},
															}),
														},
													})}
													sx={{
														flexGrow: 1,
													}}
												/>
												<ActionIcon onClick={() => remove(index)}>
													<MinusCircle size={20} />
												</ActionIcon>
											</Flex>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</Flex>
						)}
					</Droppable>
				</DragDropContext>
			)}
			<Flex gap={16}>
				<Button
					color="gray"
					leftIcon={<Plus size={20} />}
					variant="outline"
					onClick={() => append(createNewIngredient(IngredientType.HEADER))}
				>
					Add new header
				</Button>
				<Button
					color="gray"
					leftIcon={<Plus size={20} />}
					variant="outline"
					onClick={() => append(createNewIngredient(IngredientType.ITEM))}
				>
					Add new ingredients
				</Button>
			</Flex>
		</Flex>
	)
}

export default IngredientSection
