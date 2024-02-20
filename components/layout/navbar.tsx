import React from 'react'
import {
	ActionIcon,
	Flex,
	Navbar as MantineNavbar,
	rem,
	ScrollArea,
} from '@mantine/core'
import { List, SignOut } from '@phosphor-icons/react'
import Link from 'next/link'

import { AvatarGroup, Logo, MainMenu } from '@/components'
import { ROUTES } from '@/config/routes'
import { ASIDE_WIDTH_COLLAPSE, ASIDE_WIDTH_DEFAULT } from '@/constants/layout'

interface NavbarProps {
	opened: boolean
	toggle: () => void
}

const Navbar = ({ opened, toggle }: NavbarProps) => {
	return (
		<MantineNavbar
			bg="transparent"
			hidden={!opened}
			hiddenBreakpoint="sm"
			p="md"
			w={opened ? ASIDE_WIDTH_DEFAULT : ASIDE_WIDTH_COLLAPSE}
		>
			<Flex
				align="center"
				gap={12}
				sx={{
					height: rem(45),
					marginBottom: rem(20),
					paddingLeft: rem(8),
					paddingRight: rem(8),
				}}
			>
				<ActionIcon onClick={toggle}>
					<List size={24} />
				</ActionIcon>
				{opened && (
					<Link href={ROUTES.HOME}>
						<Logo />
					</Link>
				)}
			</Flex>
			<MantineNavbar.Section component={ScrollArea} mx="-md" px="md" grow>
				<MainMenu opened={opened} />
			</MantineNavbar.Section>
			<Flex
				align="center"
				gap={8}
				sx={{
					borderTop: '1px solid var(--gray-200)',
					marginLeft: rem(-16),
					marginRight: rem(-16),
					marginTop: rem(16),
					padding: `${rem(24)} ${rem(24)} ${rem(8)}`,
				}}
			>
				{opened && (
					<AvatarGroup
						description="email.example@gmail.com"
						sx={{
							flexGrow: 1,
						}}
						title="Username"
					>
						US
					</AvatarGroup>
				)}
				<ActionIcon
					size="lg"
					sx={{
						flexShrink: 0,
						...(!opened && { marginRight: rem(-16) }),
					}}
				>
					<SignOut size={20} />
				</ActionIcon>
			</Flex>
		</MantineNavbar>
	)
}

export default Navbar
