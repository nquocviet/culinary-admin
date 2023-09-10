import React, { ReactNode } from 'react'
import { Button, Modal as MantineModal, ModalBaseProps } from '@mantine/core'

import { ModalAction } from '@/components'

export type ModalOpenedProps = {
	opened: boolean
	onClose: (value?: React.SetStateAction<boolean>) => void
}

interface ModalProps extends Omit<ModalBaseProps, '__staticSelector'> {
	centered?: boolean
	closeOnConfirm?: boolean
	closeOnCancel?: boolean
	cancelText?: string
	confirmText?: string
	rightActionSection?: ReactNode
	onCancel?: () => void
	onConfirm?: () => void
}

const Modal = ({
	title,
	children,
	opened,
	centered,
	closeOnConfirm = false,
	closeOnCancel = true,
	cancelText = 'Cancel',
	confirmText = 'Confirm',
	rightActionSection,
	onClose,
	onCancel,
	onConfirm,
	...rest
}: ModalProps) => {
	return (
		<MantineModal.Root
			{...rest}
			opened={opened}
			onClose={onClose}
			centered={centered ?? true}
			transitionProps={{
				transition: 'fade',
				duration: 225,
				timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
			}}
			lockScroll
		>
			<MantineModal.Overlay />
			<MantineModal.Content>
				<MantineModal.Header px={24} sx={{ zIndex: 1000 }}>
					<MantineModal.Title
						sx={{
							fontSize: 'var(--fs-text-lg)',
							fontWeight: 'var(--fw-semibold)' as 'bold',
							fontFamily: 'var(--ff-merriweather)',
						}}
					>
						{title}
					</MantineModal.Title>
					<MantineModal.CloseButton size="lg" iconSize={20} />
				</MantineModal.Header>
				<MantineModal.Body px={24}>{children}</MantineModal.Body>
				{(cancelText || confirmText) && (
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
						<ModalAction>
							{rightActionSection && (
								<div style={{ marginRight: 'auto' }}>{rightActionSection}</div>
							)}
							{cancelText && (
								<Button
									size="sm"
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
							)}
							{confirmText && (
								<Button
									size="sm"
									color="primary"
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
