import React, { useRef } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
	ActionIcon,
	Flex,
	NumberInput as MantineNumberInput,
	NumberInputHandlers,
	NumberInputProps as MantineNumberInputProps,
	rem,
	Text,
} from '@mantine/core'

interface NumberInputProps<T extends FieldValues>
	extends MantineNumberInputProps {
	control: Control<T>
	name: Path<T>
	textIcon?: string
	rightText?: string
}

const IGNORE_CHARACTER = ['e', 'E', '-', '+']

const NumberInput = <T extends FieldValues>({
	control,
	name,
	textIcon,
	rightText,
	...rest
}: NumberInputProps<T>) => {
	const handlers = useRef<NumberInputHandlers>()

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantineNumberInput
					{...field}
					{...rest}
					value={field.value}
					type="number"
					styles={() => ({
						input: {
							paddingRight: '3.25rem',
						},
					})}
					handlersRef={handlers}
					onKeyDown={(event) => {
						if (IGNORE_CHARACTER.includes(event.key)) {
							event.preventDefault()
						}
					}}
					{...(textIcon && {
						icon: textIcon,
						iconWidth: 28,
						styles: {
							...rest.styles,
							icon: {
								left: 4,
								color: 'var(--gray-400)',
								fontSize: 'var(--fs-text-sm)',
							},
						},
					})}
					{...(rightText
						? {
								rightSection: (
									<Text
										sx={{
											display: 'inline-flex',
											alignItems: 'center',
											height: '100%',
											fontSize: 'var(--fs-text-sm)',
											fontWeight: 'var(--fw-medium)' as 'normal',
											borderLeft: '1px solid var(--gray-300)',
											paddingLeft: rem(14),
											paddingRight: rem(14),
											whiteSpace: 'nowrap',
										}}
									>
										{rightText}
									</Text>
								),
								rightSectionWidth: 'auto',
						  }
						: {
								rightSection: (
									<Flex>
										<ActionIcon
											size="sm"
											onClick={() => handlers.current?.decrement()}
										>
											–
										</ActionIcon>
										<ActionIcon
											size="sm"
											onClick={() => handlers.current?.increment()}
										>
											+
										</ActionIcon>
									</Flex>
								),
								rightSectionWidth: 52,
						  })}
					error={error?.message}
					hideControls
				/>
			)}
		/>
	)
}

export default NumberInput
