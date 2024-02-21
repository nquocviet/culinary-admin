import React, { ReactNode } from 'react'
import { ModalBaseProps, rem, Text } from '@mantine/core'
import { Button, Modal as MantineModal } from '@mantine/core'
import { Info, WarningCircle } from '@phosphor-icons/react'

import { HighlightIcon, ModalAction } from '@/components'

interface ModalConfirmProps extends Omit<ModalBaseProps, '__staticSelector'> {
	cancelText?: string
	closeOnCancel?: boolean
	closeOnConfirm?: boolean
	confirmText?: string
	message: ReactNode
	onCancel?: () => void
	onConfirm?: () => void
	title: string
	type?: 'error' | 'warning'
}

const ModalConfirm = ({
	cancelText = 'Cancel',
	closeOnCancel = true,
	closeOnConfirm = false,
	confirmText = 'Yes, confirm',
	message,
	onCancel,
	onClose,
	onConfirm,
	opened,
	title,
	type = 'error',
	...props
}: ModalConfirmProps) => {
	return (
		<MantineModal.Root
			{...props}
			opened={opened}
			size="md"
			transitionProps={{
				duration: 225,
				timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
				transition: 'fade',
			}}
			centered
			lockScroll
			onClose={onClose}
		>
			<MantineModal.Overlay />
			<MantineModal.Content>
				<MantineModal.Header
					px={24}
					sx={{ alignItems: 'flex-start', zIndex: 1000 }}
				>
					<MantineModal.Title>
						{type === 'error' && (
							<HighlightIcon color="red" icon={WarningCircle} size="lg" />
						)}
						{type === 'warning' && (
							<HighlightIcon color="yellow" icon={Info} size="lg" />
						)}
					</MantineModal.Title>
					<MantineModal.CloseButton iconSize={24} size="lg" />
				</MantineModal.Header>
				<MantineModal.Body px={24}>
					<Text
						className="line-clamp-2"
						sx={{
							fontSize: 'var(--fs-text-lg)',
							fontWeight: 'var(--fw-medium)' as 'normal',
							marginBottom: rem(8),
						}}
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
						bottom: 0,
						paddingLeft: 0,
						paddingRight: 0,
						paddingTop: 0,
						top: 'unset',
						zIndex: 1000,
					}}
				>
					<ModalAction fluid>
						<Button
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
							color={type === 'error' ? 'red' : 'primary'}
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
