import React from 'react'
import { Avatar, AvatarProps, Flex, Text } from '@mantine/core'

import { cn } from '@/utils'

interface AvatarGroupProps extends AvatarProps {
	spacing?: number
	title: string
	description?: string
	className?: string
	titleClassName?: string
	descriptionClassName?: string
}

const AvatarGroup = ({
	spacing = 10,
	title,
	description,
	className,
	titleClassName,
	descriptionClassName,
	...props
}: AvatarGroupProps) => {
	return (
		<Flex align="center" gap={spacing} className={className}>
			<Avatar size="md" radius="xl" color="primary" {...props} />
			<div>
				<Text
					className={cn('text-sm font-medium line-clamp-1', titleClassName)}
				>
					{title}
				</Text>
				{description && (
					<Text
						className={cn(
							'text-xs text-gray-600 line-clamp-1',
							descriptionClassName
						)}
					>
						{description}
					</Text>
				)}
			</div>
		</Flex>
	)
}

export default AvatarGroup
