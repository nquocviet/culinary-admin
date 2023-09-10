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
		<Flex direction="column" align="stretch" gap={16}>
			<PageTitle order={2} title="Intro" divider />
			<TextInput
				name="title"
				control={control}
				size="md"
				label="Title"
				placeholder="New recipe title here"
				required
			/>
			<Textarea
				name="description"
				control={control}
				size="md"
				label="Description"
				placeholder="Enter a description"
				minRows={5}
			/>
			<div>
				<Button
					component="label"
					color="gray"
					size="md"
					variant="outline"
					leftIcon={<ImageSquare size={20} weight="fill" />}
				>
					Add a cover image
					<input type="file" style={{ display: 'none' }} />
				</Button>
			</div>
			<Grid>
				<Grid.Col span={6}>
					<Flex
						align="flex-end"
						sx={{
							'& > *': { flex: 1 },
						}}
						gap={16}
					>
						<NumberInput
							name="prepareHour"
							control={control}
							size="md"
							label="Prepare time"
							rightText="hours"
							min={0}
							max={168}
							required
						/>
						<NumberInput
							name="prepareMinute"
							control={control}
							size="md"
							rightText="minutes"
							min={0}
							max={59}
						/>
					</Flex>
				</Grid.Col>
				<Grid.Col span={6}>
					<Flex
						align="flex-end"
						sx={{
							'& > *': { flex: 1 },
						}}
						gap={16}
					>
						<NumberInput
							name="cookingHour"
							control={control}
							size="md"
							label="Cooking time"
							rightText="hours"
							min={0}
							max={168}
							required
						/>
						<NumberInput
							name="cookingMinute"
							control={control}
							size="md"
							rightText="minutes"
							min={0}
							max={59}
						/>
					</Flex>
				</Grid.Col>
				<Grid.Col span={6}>
					<Select
						name="difficulty"
						control={control}
						data={[]}
						size="md"
						label="Difficulty"
						placeholder="Choose a difficulty"
						required
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<NumberInput
						name="serves"
						control={control}
						size="md"
						label="Serves"
						rightText="people"
						min={1}
						max={100}
						required
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<Select
						name="cuisine"
						control={control}
						data={[]}
						size="md"
						label="Cuisine"
						placeholder="Choose a cuisine"
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<Select
						name="dishes"
						control={control}
						data={[]}
						size="md"
						label="Categories"
						placeholder="Choose categories"
					/>
				</Grid.Col>
			</Grid>
			<Select
				name="series"
				control={control}
				data={[]}
				size="md"
				label="Series"
				placeholder="Add to your series"
			/>
		</Flex>
	)
}

export default IntroSection
