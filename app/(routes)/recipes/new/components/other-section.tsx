import React, { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ActionIcon, Button, Divider, Flex, Grid, rem } from '@mantine/core'
import { MinusCircle, Plus } from '@phosphor-icons/react'

import { Label, PageTitle, Textarea, TextInput } from '@/components'
import { uuid } from '@/utils'

const MAX_NUTRITIONAL_ITEMS = 6

const createNewNutritional = () => {
	const nutritional = {
		id: uuid(),
		value: '',
		unit: '',
	}

	return nutritional
}

const OtherSection = () => {
	const [showNote, setShowNote] = useState(false)
	const { control } = useFormContext()
	const { fields, append, remove, replace } = useFieldArray({
		control,
		name: 'nutritionals',
	})

	return (
		<Flex direction="column" align="stretch" gap={16}>
			<PageTitle order={2} title="Others" divider />
			{Boolean(fields.length) && (
				<>
					<Label text="Nutritional information" />
					<Grid>
						{fields.map((nutritional: any, index) => (
							<Grid.Col key={nutritional.id} span={4}>
								<Flex sx={{ position: 'relative' }}>
									<TextInput
										name={`nutritionals[${index}].value`}
										control={control}
										placeholder="e.g. 200g"
										size="md"
										sx={{
											flex: 1,
										}}
										styles={{
											input: {
												borderRight: 'none',
												borderTopRightRadius: 0,
												borderBottomRightRadius: 0,
											},
										}}
									/>
									<Divider orientation="vertical" />
									<TextInput
										name={`nutritionals[${index}].unit`}
										control={control}
										placeholder="e.g. calories"
										size="md"
										sx={{ flex: 1 }}
										styles={{
											input: {
												borderLeft: 'none',
												borderTopLeftRadius: 0,
												borderBottomLeftRadius: 0,
											},
										}}
									/>
									<ActionIcon
										variant="transparent"
										sx={{
											backgroundColor: 'var(--white)',
											position: 'absolute',
											right: 0,
											top: 0,
											transform: 'translate(50%, -50%)',
											'&:active': {
												transform: 'translate(50%, -50%)',
											},
										}}
										onClick={() => remove(index)}
									>
										<MinusCircle size={20} />
									</ActionIcon>
								</Flex>
							</Grid.Col>
						))}
					</Grid>
					<Grid>
						<Grid.Col span={4}>
							<Flex gap={16}>
								<Button
									color="gray"
									variant="outline"
									size="md"
									sx={{ flex: 1 }}
									onClick={() => {
										if (fields.length < MAX_NUTRITIONAL_ITEMS) {
											append(createNewNutritional())
										}
									}}
									disabled={fields.length === MAX_NUTRITIONAL_ITEMS}
								>
									Add new
								</Button>
								<Button
									color="primary"
									size="md"
									sx={{ flex: 1 }}
									onClick={() => replace([])}
								>
									Remove all
								</Button>
							</Flex>
						</Grid.Col>
					</Grid>
				</>
			)}
			{showNote && (
				<Textarea
					name="note"
					control={control}
					label="Note"
					placeholder="Note something..."
					rightSection={
						<ActionIcon
							sx={{
								position: 'absolute',
								bottom: '100%',
								marginBottom: rem(4),
								marginRight: rem(-8),
							}}
							onClick={() => setShowNote(false)}
						>
							<MinusCircle size={20} />
						</ActionIcon>
					}
					minRows={4}
					sx={{ position: 'relative' }}
				/>
			)}
			<Flex gap={16}>
				{!fields.length && (
					<Button
						color="gray"
						variant="outline"
						size="md"
						leftIcon={<Plus size={20} />}
						onClick={() =>
							replace([
								createNewNutritional(),
								createNewNutritional(),
								createNewNutritional(),
							])
						}
					>
						Add nutritional information
					</Button>
				)}
				{!showNote && (
					<Button
						color="gray"
						variant="outline"
						size="md"
						leftIcon={<Plus size={20} />}
						onClick={() => setShowNote(true)}
					>
						Add note
					</Button>
				)}
			</Flex>
		</Flex>
	)
}

export default OtherSection
