import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { ActionIcon, Button, Flex, Text } from '@mantine/core'
import { DotsSixVertical, MinusCircle, Plus } from '@phosphor-icons/react'

import { PageTitle, TextInput } from '@/components'
import { INGREDIENT_TYPES } from '@/constants/recipe'
import { uuid } from '@/utils'

const createNewIngredient = (
	type: keyof typeof INGREDIENT_TYPES = INGREDIENT_TYPES.HEADER
) => {
	const ingredient = {
		id: uuid(),
		type,
		title: '',
	}

	return ingredient
}

const IngredientSection = () => {
	const { control } = useFormContext()
	const { fields, append, remove, replace } = useFieldArray({
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
		<Flex direction="column" align="stretch" gap={16}>
			<PageTitle order={2} title="Ingredients" divider />
			<Text>
				Enter ingredients below or{' '}
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
			{Boolean(fields.length) && (
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<Droppable droppableId="ingredients">
						{(provided) => (
							<Flex
								direction="column"
								align="stretch"
								gap={16}
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{fields.map((ingredient: any, index) => (
									<Draggable
										key={ingredient.id}
										draggableId={ingredient.id}
										index={index}
									>
										{(provided) => (
											<Flex
												align="center"
												wrap="nowrap"
												gap={8}
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<ActionIcon>
													<DotsSixVertical size={20} weight="bold" />
												</ActionIcon>
												<TextInput
													name={`ingredients[${index}].title`}
													size="md"
													control={control}
													placeholder={
														ingredient.type === INGREDIENT_TYPES.HEADER
															? 'Add header, e.g. Sauce'
															: 'Add ingredient, e.g.  0.5 lb. shrimp'
													}
													sx={{
														flexGrow: 1,
													}}
													styles={() => ({
														input: {
															...(ingredient.type ===
																INGREDIENT_TYPES.HEADER && {
																'&::placeholder': {
																	fontWeight: 'var(--fw-semibold)' as 'bold',
																},
															}),
														},
													})}
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
					variant="outline"
					size="md"
					leftIcon={<Plus size={20} />}
					onClick={() => append(createNewIngredient(INGREDIENT_TYPES.HEADER))}
				>
					Add new header
				</Button>
				<Button
					color="gray"
					variant="outline"
					size="md"
					leftIcon={<Plus size={20} />}
					onClick={() => append(createNewIngredient(INGREDIENT_TYPES.ITEM))}
				>
					Add new ingredients
				</Button>
			</Flex>
		</Flex>
	)
}

export default IngredientSection
