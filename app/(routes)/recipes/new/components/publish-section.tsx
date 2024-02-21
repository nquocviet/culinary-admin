import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { Eye, FloppyDisk, Prohibit } from '@phosphor-icons/react'

import { PageTitle, Switch } from '@/components'

const PublishSection = () => {
	const { control } = useFormContext()

	return (
		<Flex align="stretch" direction="column" gap={16}>
			<PageTitle order={2} title="Publish" divider />
			<Flex align="center" gap={8} justify="space-between">
				<Switch
					control={control}
					description="Anyone who sees my profile can see this recipe."
					label="Publish recipe"
					name="published"
				/>
				<Flex gap={12}>
					<Button
						color="gray"
						leftIcon={<Prohibit size={20} weight="bold" />}
						variant="outline"
					>
						Cancel
					</Button>
					<Button
						color="gray"
						leftIcon={<Eye size={20} weight="bold" />}
						variant="filled"
					>
						Preview
					</Button>
					<Button
						color="primary"
						leftIcon={<FloppyDisk size={20} weight="bold" />}
					>
						Save recipe
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default PublishSection
