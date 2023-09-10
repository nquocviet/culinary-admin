import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { Eye, FloppyDisk, Prohibit } from '@phosphor-icons/react'

import { PageTitle, Switch } from '@/components'

const PublishSection = () => {
	const { control } = useFormContext()

	return (
		<Flex direction="column" align="stretch" gap={16}>
			<PageTitle order={2} title="Publish" divider />
			<Flex justify="space-between" align="center" gap={8}>
				<Switch
					name="published"
					control={control}
					label="Public blog"
					description="Anyone who sees my profile can see this blog."
					size="md"
				/>
				<Flex gap={12}>
					<Button
						color="gray"
						variant="outline"
						size="md"
						leftIcon={<Prohibit size={20} weight="bold" />}
					>
						Cancel
					</Button>
					<Button
						color="gray"
						variant="filled"
						size="md"
						leftIcon={<Eye size={20} weight="bold" />}
					>
						Preview
					</Button>
					<Button
						color="primary"
						size="md"
						leftIcon={<FloppyDisk size={20} weight="bold" />}
					>
						Save blog
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default PublishSection
