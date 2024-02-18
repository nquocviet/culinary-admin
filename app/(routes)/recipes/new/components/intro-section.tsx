import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Button, Flex, Grid } from '@mantine/core'
import { ImageSquare } from '@phosphor-icons/react'

import {
	NumberInput,
	PageTitle,
	Select,
	Textarea,
	TextInput,
} from '@/components'

const IntroSection = () => {
	const { control } = useFormContext()

	return (
		<Flex align="stretch" direction="column" gap={16}>
			<PageTitle order={2} title="Intro" divider />
			<TextInput
				control={control}
				label="Title"
				name="title"
				placeholder="New recipe title here"
				size="md"
				required
			/>
			<Textarea
				control={control}
				label="Description"
				minRows={5}
				name="description"
				placeholder="Enter a description"
				size="md"
			/>
			<div>
				<Button
					color="gray"
					component="label"
					leftIcon={<ImageSquare size={20} weight="fill" />}
					size="md"
					variant="outline"
				>
					Add a cover image
					<input style={{ display: 'none' }} type="file" />
				</Button>
			</div>
			<Grid>
				<Grid.Col span={6}>
					<Flex
						align="flex-end"
						gap={16}
						sx={{
							'& > *': { flex: 1 },
						}}
					>
						<NumberInput
							control={control}
							label="Prepare time"
							max={168}
							min={0}
							name="prepareHour"
							rightText="hours"
							size="md"
							required
						/>
						<NumberInput
							control={control}
							max={59}
							min={0}
							name="prepareMinute"
							rightText="minutes"
							size="md"
						/>
					</Flex>
				</Grid.Col>
				<Grid.Col span={6}>
					<Flex
						align="flex-end"
						gap={16}
						sx={{
							'& > *': { flex: 1 },
						}}
					>
						<NumberInput
							control={control}
							label="Cooking time"
							max={168}
							min={0}
							name="cookingHour"
							rightText="hours"
							size="md"
							required
						/>
						<NumberInput
							control={control}
							max={59}
							min={0}
							name="cookingMinute"
							rightText="minutes"
							size="md"
						/>
					</Flex>
				</Grid.Col>
				<Grid.Col span={6}>
					<Select
						control={control}
						data={[]}
						label="Difficulty"
						name="difficulty"
						placeholder="Choose a difficulty"
						size="md"
						required
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<NumberInput
						control={control}
						label="Serves"
						max={100}
						min={1}
						name="serves"
						rightText="people"
						size="md"
						required
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<Select
						control={control}
						data={[]}
						label="Cuisine"
						name="cuisine"
						placeholder="Choose a cuisine"
						size="md"
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<Select
						control={control}
						data={[]}
						label="Categories"
						name="dishes"
						placeholder="Choose categories"
						size="md"
					/>
				</Grid.Col>
			</Grid>
			<Select
				control={control}
				data={[]}
				label="Series"
				name="series"
				placeholder="Add to your series"
				size="md"
			/>
		</Flex>
	)
}

export default IntroSection
