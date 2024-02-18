import React from 'react'
import { Avatar, AvatarProps, Flex, Text } from '@mantine/core'

interface AvatarGroupProps extends AvatarProps {
	className?: string
	description?: string
	spacing?: number
	title: string
}

const AvatarGroup = ({
	className,
	description,
	spacing = 10,
	title,
	...props
}: AvatarGroupProps) => {
	return (
		<Flex align="center" className={className} gap={spacing}>
			<Avatar color="gray" radius="xl" size="md" {...props} />
			<div>
				<Text
					className="line-clamp-1"
					sx={{
						fontSize: 'var(--fs-text-sm)',
						fontWeight: 'var(--fw-medium)' as 'normal',
					}}
				>
					{title}
				</Text>
				{description && (
					<Text
						className="line-clamp-1"
						sx={{
							color: 'var(--gray-600)',
							fontSize: 'var(--fs-text-xs)',
						}}
					>
						{description}
					</Text>
				)}
			</div>
		</Flex>
	)
}

export default AvatarGroup
