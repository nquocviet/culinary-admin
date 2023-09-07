'use client'

import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Collapse, Flex, Grid, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
	Check,
	Eraser,
	FunnelSimple,
	MagnifyingGlass,
	Plus,
} from '@phosphor-icons/react'

import { PageTitle, Select, TextInput } from '@/components'

const ManageRecipesPage = () => {
	const [filtersOpened, { toggle: toggleFilters }] = useDisclosure(false)
	const { control, handleSubmit } = useForm()

	const onSubmit = useCallback((data) => console.log(data), [])

	return (
		<Flex direction="column" align="stretch" gap={24}>
			<Flex justify="space-between" align="center" gap={8}>
				<PageTitle title="Manage recipes" />
				<Button color="primary" leftIcon={<Plus size={16} weight="bold" />}>
					Add new recipe
				</Button>
			</Flex>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex justify="space-between" align="center" gap={8}>
					<Button
						color="gray"
						variant="outline"
						leftIcon={<FunnelSimple size={20} />}
						onClick={toggleFilters}
					>
						More filters
					</Button>
					<Flex align="stretch" gap={12}>
						<TextInput
							name="q"
							control={control}
							icon={<MagnifyingGlass size={20} />}
							w={280}
							placeholder="Search..."
						/>
					</Flex>
				</Flex>
				<Collapse in={filtersOpened} sx={{ marginTop: rem(24) }}>
					<Grid>
						<Grid.Col span={4}>
							<Select
								name="author"
								control={control}
								data={[]}
								label="Author"
								placeholder="Select author"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="cuisines"
								control={control}
								data={[]}
								label="Cuisines"
								placeholder="Select cuisines"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="categories"
								control={control}
								data={[]}
								label="Categories"
								placeholder="Select categories"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="serves"
								control={control}
								data={[]}
								label="Serves"
								placeholder="Select serves"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="status"
								control={control}
								data={[]}
								label="Status"
								placeholder="Select status"
							/>
						</Grid.Col>
						<Grid.Col span={4}>
							<Select
								name="sortOrder"
								control={control}
								data={[]}
								label="Sort by"
								placeholder="Select sort by"
							/>
						</Grid.Col>
					</Grid>
					<Flex justify="flex-end" gap={12} sx={{ marginTop: rem(24) }}>
						<Button
							color="gray"
							variant="outline"
							leftIcon={<Eraser size={16} weight="bold" />}
						>
							Clear all
						</Button>
						<Button
							color="primary"
							leftIcon={<Check size={16} weight="bold" />}
						>
							Apply
						</Button>
					</Flex>
				</Collapse>
			</form>
		</Flex>
	)
}

export default ManageRecipesPage
