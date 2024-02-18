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
	rightText?: string
	textIcon?: string
}

const IGNORE_CHARACTER = ['e', 'E', '-', '+']

const NumberInput = <T extends FieldValues>({
	control,
	name,
	rightText,
	textIcon,
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
					handlersRef={handlers}
					styles={() => ({
						input: {
							paddingRight: '3.25rem',
						},
					})}
					type="number"
					value={field.value}
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
								color: 'var(--gray-400)',
								fontSize: 'var(--fs-text-sm)',
								left: 4,
							},
						},
					})}
					{...(rightText
						? {
								rightSection: (
									<Text
										sx={{
											alignItems: 'center',
											borderLeft: '1px solid var(--gray-300)',
											display: 'inline-flex',
											fontSize: 'var(--fs-text-sm)',
											fontWeight: 'var(--fw-medium)' as 'normal',
											height: '100%',
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
