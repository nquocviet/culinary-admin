'use client'

import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { PageTitle } from '@/components'

import { IntroSection, PublishSection } from './components'

const NewBlogPage = () => {
	const methods = useForm()
	const { handleSubmit } = methods

	const onSubmit = useCallback((data) => {
		console.log(data)
	}, [])

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Flex align="stretch" direction="column" gap={24}>
				<Flex align="center" gap={8} justify="space-between">
					<PageTitle title="Write new blog" />
				</Flex>
				<FormProvider {...methods}>
					<IntroSection />
					<PublishSection />
				</FormProvider>
			</Flex>
		</form>
	)
}

export default NewBlogPage
