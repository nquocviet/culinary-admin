'use client'

import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { DownloadSimple, UploadSimple } from '@phosphor-icons/react'

import { PageTitle } from '@/components'

import {
	DirectionSection,
	IngredientSection,
	IntroSection,
	OtherSection,
	PublishSection,
} from './components'

const NewRecipePage = () => {
	const methods = useForm()
	const { handleSubmit } = methods

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Flex direction="column" align="stretch" gap={24}>
				<Flex justify="space-between" align="center" gap={8}>
					<PageTitle title="Add new recipe" />
					<Flex gap={12}>
						<Button
							color="gray"
							variant="outline"
							size="md"
							leftIcon={<DownloadSimple size={20} weight="bold" />}
						>
							Download sample
						</Button>
						<Button
							color="primary"
							size="md"
							leftIcon={<UploadSimple size={20} weight="bold" />}
						>
							Import recipe
						</Button>
					</Flex>
				</Flex>
				<FormProvider {...methods}>
					<IntroSection />
					<IngredientSection />
					<DirectionSection />
					<OtherSection />
					<PublishSection />
				</FormProvider>
			</Flex>
		</form>
	)
}

export default NewRecipePage
