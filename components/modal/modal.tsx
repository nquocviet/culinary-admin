import React, { ReactNode } from 'react'
import { Button, Modal as MantineModal, ModalBaseProps } from '@mantine/core'

import { ModalAction } from '@/components'

export type ModalOpenedProps = {
	onClose: (value?: React.SetStateAction<boolean>) => void
	opened: boolean
}

interface ModalProps extends Omit<ModalBaseProps, '__staticSelector'> {
	cancelText?: string
	centered?: boolean
	closeOnCancel?: boolean
	closeOnConfirm?: boolean
	confirmText?: string
	onCancel?: () => void
	onConfirm?: () => void
	rightActionSection?: ReactNode
}

const Modal = ({
	cancelText = 'Cancel',
	centered,
	children,
	closeOnCancel = true,
	closeOnConfirm = false,
	confirmText = 'Confirm',
	onCancel,
	onClose,
	onConfirm,
	opened,
	rightActionSection,
	title,
	...rest
}: ModalProps) => {
	return (
		<MantineModal.Root
			{...rest}
			centered={centered ?? true}
			opened={opened}
			transitionProps={{
				duration: 225,
				timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
				transition: 'fade',
			}}
			lockScroll
			onClose={onClose}
		>
			<MantineModal.Overlay />
			<MantineModal.Content>
				<MantineModal.Header px={24} sx={{ zIndex: 1000 }}>
					<MantineModal.Title
						sx={{
							fontFamily: 'var(--ff-merriweather)',
							fontSize: 'var(--fs-text-lg)',
							fontWeight: 'var(--fw-semibold)' as 'bold',
						}}
					>
						{title}
					</MantineModal.Title>
					<MantineModal.CloseButton iconSize={20} size="lg" />
				</MantineModal.Header>
				<MantineModal.Body px={24}>{children}</MantineModal.Body>
				{(cancelText || confirmText) && (
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
						<ModalAction>
							{rightActionSection && (
								<div style={{ marginRight: 'auto' }}>{rightActionSection}</div>
							)}
							{cancelText && (
								<Button
									color="gray"
									size="sm"
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
							)}
							{confirmText && (
								<Button
									color="primary"
									size="sm"
									onClick={() => {
										if (closeOnConfirm) {
											onClose()
										}
										onConfirm?.()
									}}
								>
									{confirmText}
								</Button>
							)}
						</ModalAction>
					</MantineModal.Header>
				)}
			</MantineModal.Content>
		</MantineModal.Root>
	)
}

export default Modal
