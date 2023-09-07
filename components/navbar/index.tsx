import React from 'react'
import {
	ActionIcon,
	Burger,
	Flex,
	Navbar as MantineNavbar,
	ScrollArea,
} from '@mantine/core'
import { SignOut } from '@phosphor-icons/react'
import Link from 'next/link'

import { AvatarGroup, Logo, MainMenu } from '@/components'
import { ASIDE_WIDTH_COLLAPSE, ASIDE_WIDTH_DEFAULT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils'

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
			width={{ xs: opened ? ASIDE_WIDTH_DEFAULT : ASIDE_WIDTH_COLLAPSE }}
		>
			<Flex align="center" gap={12} className="mb-5 h-[45px] px-2">
				<Burger
					size={20}
					opened={false}
					className="shrink-0"
					onClick={toggle}
				/>
				<Link href={ROUTES.HOME} className="text-black no-underline">
					<Flex align="center" gap={10}>
						<Logo />
					</Flex>
				</Link>
			</Flex>
			<MantineNavbar.Section component={ScrollArea} mx="-md" px="md" grow>
				<MainMenu opened={opened} />
			</MantineNavbar.Section>
			<Flex
				align="center"
				gap={8}
				className="-mx-4 mt-4 border-t border-gray-200 px-6 pt-6 pb-2"
			>
				{opened && (
					<AvatarGroup
						title="Username"
						description="email.example@gmail.com"
						className="grow"
					>
						US
					</AvatarGroup>
				)}
				<ActionIcon size="lg" className={cn('shrink-0', !opened && '-mr-4')}>
					<SignOut size={20} />
				</ActionIcon>
			</Flex>
		</MantineNavbar>
	)
}

export default Navbar
