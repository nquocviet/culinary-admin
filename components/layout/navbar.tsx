import React from 'react'
import {
	ActionIcon,
	Burger,
	Flex,
	Navbar as MantineNavbar,
	rem,
	ScrollArea,
} from '@mantine/core'
import { SignOut } from '@phosphor-icons/react'
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
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			w={opened ? ASIDE_WIDTH_DEFAULT : ASIDE_WIDTH_COLLAPSE}
		>
			<Flex
				align="center"
				gap={12}
				sx={{
					marginBottom: rem(20),
					height: rem(45),
					paddingLeft: rem(8),
					paddingRight: rem(8),
				}}
			>
				<Burger
					size={20}
					opened={false}
					sx={{ flexShrink: 0 }}
					onClick={toggle}
				/>
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
					marginLeft: rem(-16),
					marginRight: rem(-16),
					marginTop: rem(16),
					borderTop: '1px solid var(--gray-200)',
					padding: `${rem(24)} ${rem(24)} ${rem(8)}`,
				}}
			>
				{opened && (
					<AvatarGroup
						title="Username"
						description="email.example@gmail.com"
						sx={{
							flexGrow: 1,
						}}
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
