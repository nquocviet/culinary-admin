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
			<Flex align="stretch" direction="column" gap={24}>
				<Flex align="center" gap={8} justify="space-between">
					<PageTitle title="Add new recipe" />
					<Flex gap={12}>
						<Button
							color="gray"
							leftIcon={<DownloadSimple size={20} weight="bold" />}
							size="md"
							variant="outline"
						>
							Download sample
						</Button>
						<Button
							color="primary"
							leftIcon={<UploadSimple size={20} weight="bold" />}
							size="md"
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
