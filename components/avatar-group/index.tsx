import React from 'react'
import { Avatar, AvatarProps, Flex, Text } from '@mantine/core'
import clsx from 'clsx'

interface AvatarGroupProps extends AvatarProps {
	spacing?: number
	title: string
	description?: string
	className?: string
}

const AvatarGroup = ({
	spacing = 10,
	title,
	description,
	className,
	...props
}: AvatarGroupProps) => {
	return (
		<Flex align="center" gap={spacing} className={className}>
			<Avatar size="md" radius="xl" color="primary" {...props} />
			<div>
				<Text
					sx={{
						fontSize: 'var(--fs-text-sm)',
						fontWeight: 'var(--fw-medium)' as 'normal',
					}}
					className="line-clamp-1"
				>
					{title}
				</Text>
				{description && (
					<Text
						sx={{
							fontSize: 'var(--fs-text-xs)',
							color: 'var(--gray-600)',
						}}
						className="line-clamp-1"
					>
						{description}
					</Text>
				)}
			</div>
		</Flex>
	)
}

export default AvatarGroup
