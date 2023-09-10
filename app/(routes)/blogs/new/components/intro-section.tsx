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
		<Flex direction="column" align="stretch" gap={16}>
			<PageTitle order={2} title="Intro" divider />
			<TextInput
				name="title"
				control={control}
				size="md"
				label="Title"
				placeholder="New blog title here"
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
			<Select
				name="topic"
				control={control}
				data={[]}
				size="md"
				label="Topics"
				placeholder="Choose topics"
			/>
			<RichTextEditor
				name="content"
				content=""
				label="Content"
				placeholder="Write your blog content here"
				setValue={setValue}
				minHeight={280}
			/>
		</Flex>
	)
}

export default IntroSection
