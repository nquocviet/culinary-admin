import React, { ReactNode } from 'react'
import { ModalBaseProps, rem, Text } from '@mantine/core'
import { Button, Modal as MantineModal } from '@mantine/core'
import { WarningCircle } from '@phosphor-icons/react'

import { HighlightIcon, ModalAction } from '@/components'

interface ModalConfirmProps extends Omit<ModalBaseProps, '__staticSelector'> {
	title: string
	message: ReactNode
	closeOnConfirm?: boolean
	closeOnCancel?: boolean
	cancelText?: string
	confirmText?: string
	onCancel?: () => void
	onConfirm?: () => void
}

const ModalConfirm = ({
	title,
	message,
	closeOnConfirm = false,
	closeOnCancel = true,
	cancelText = 'Cancel',
	confirmText = 'Yes, confirm',
	opened,
	onClose,
	onCancel,
	onConfirm,
	...props
}: ModalConfirmProps) => {
	return (
		<MantineModal.Root
			{...props}
			size="md"
			opened={opened}
			onClose={onClose}
			transitionProps={{
				transition: 'fade',
				duration: 225,
				timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			}}
			centered
			lockScroll
		>
			<MantineModal.Overlay />
			<MantineModal.Content>
				<MantineModal.Header
					px={24}
					sx={{ alignItems: 'flex-start', zIndex: 1000 }}
				>
					<MantineModal.Title>
						<HighlightIcon color="red" size="lg" icon={WarningCircle} />
					</MantineModal.Title>
					<MantineModal.CloseButton size="lg" iconSize={24} />
				</MantineModal.Header>
				<MantineModal.Body px={24}>
					<Text
						sx={{
							fontSize: 'var(--fs-text-lg)',
							fontWeight: 'var(--fw-medium)' as 'normal',
							marginBottom: rem(8),
						}}
						className="line-clamp-2"
					>
						{title}
					</Text>
					<Text
						sx={{
							color: 'var(--gray-600)',
							fontSize: 'var(--fs-text-sm)',
						}}
					>
						{message}
					</Text>
				</MantineModal.Body>
				<MantineModal.Header
					sx={{
						zIndex: 1000,
						top: 'unset',
						bottom: 0,
						paddingTop: 0,
						paddingLeft: 0,
						paddingRight: 0,
					}}
				>
					<ModalAction fluid>
						<Button
							size="md"
							color="gray"
							variant="outline"
							onClick={() => {
								if (closeOnCancel) {
									onClose()
								}
								onCancel?.()
							}}
						>
							{cancelText}
						</Button>
						<Button
							size="md"
							color="red"
							onClick={() => {
								if (closeOnConfirm) {
									onClose()
								}
								onConfirm?.()
							}}
						>
							{confirmText}
						</Button>
					</ModalAction>
				</MantineModal.Header>
			</MantineModal.Content>
		</MantineModal.Root>
	)
}

export default ModalConfirm
