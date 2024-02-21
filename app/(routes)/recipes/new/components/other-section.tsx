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
		unit: '',
		value: '',
	}

	return nutritional
}

const OtherSection = () => {
	const [showNote, setShowNote] = useState(false)
	const { control } = useFormContext()
	const { append, fields, remove, replace } = useFieldArray({
		control,
		name: 'nutritionals',
	})

	return (
		<Flex align="stretch" direction="column" gap={16}>
			<PageTitle order={2} title="Others" divider />
			{Boolean(fields.length) && (
				<>
					<Label text="Nutritional information" />
					<Grid>
						{fields.map((nutritional: any, index) => (
							<Grid.Col key={nutritional.id} span={4}>
								<Flex sx={{ position: 'relative' }}>
									<TextInput
										control={control}
										name={`nutritionals[${index}].value`}
										placeholder="e.g. 200g"
										styles={{
											input: {
												borderBottomRightRadius: 0,
												borderRight: 'none',
												borderTopRightRadius: 0,
											},
										}}
										sx={{
											flex: 1,
										}}
									/>
									<Divider orientation="vertical" />
									<TextInput
										control={control}
										name={`nutritionals[${index}].unit`}
										placeholder="e.g. calories"
										styles={{
											input: {
												borderBottomLeftRadius: 0,
												borderLeft: 'none',
												borderTopLeftRadius: 0,
											},
										}}
										sx={{ flex: 1 }}
									/>
									<ActionIcon
										sx={{
											'&:active': {
												transform: 'translate(50%, -50%)',
											},
											backgroundColor: 'var(--white)',
											position: 'absolute',
											right: 0,
											top: 0,
											transform: 'translate(50%, -50%)',
										}}
										variant="transparent"
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
									disabled={fields.length === MAX_NUTRITIONAL_ITEMS}
									sx={{ flex: 1 }}
									variant="outline"
									onClick={() => {
										if (fields.length < MAX_NUTRITIONAL_ITEMS) {
											append(createNewNutritional())
										}
									}}
								>
									Add new
								</Button>
								<Button
									color="primary"
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
					control={control}
					label="Note"
					minRows={4}
					name="note"
					placeholder="Note something..."
					rightSection={
						<ActionIcon
							sx={{
								bottom: '100%',
								marginBottom: rem(4),
								marginRight: rem(-8),
								position: 'absolute',
							}}
							onClick={() => setShowNote(false)}
						>
							<MinusCircle size={20} />
						</ActionIcon>
					}
					sx={{ position: 'relative' }}
				/>
			)}
			<Flex gap={16}>
				{!fields.length && (
					<Button
						color="gray"
						leftIcon={<Plus size={20} />}
						variant="outline"
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
						leftIcon={<Plus size={20} />}
						variant="outline"
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
