import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { ImageSquare } from '@phosphor-icons/react'

import {
	PageTitle,
	RichTextEditor,
	Select,
	Textarea,
	TextInput,
} from '@/components'

const IntroSection = () => {
	const { control, setValue } = useFormContext()

	return (
		<Flex align="stretch" direction="column" gap={16}>
			<PageTitle order={2} title="Intro" divider />
			<TextInput
				control={control}
				label="Title"
				name="title"
				placeholder="New blog title here"
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
			<Select
				control={control}
				data={[]}
				label="Topics"
				name="topic"
				placeholder="Choose topics"
				size="md"
			/>
			<RichTextEditor
				content=""
				label="Content"
				minHeight={280}
				name="content"
				placeholder="Write your blog content here"
				setValue={setValue}
			/>
		</Flex>
	)
}

export default IntroSection
