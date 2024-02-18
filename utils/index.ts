export const hasChildren = (item: Record<string, unknown>) => {
	const { children } = item

	if (
		children === undefined ||
		children?.constructor !== Array ||
		(children as unknown[]).length === 0
	) {
		return false
	}

	return true
}

export const formatDate = (
	date: Date | number,
	opts?: Intl.DateTimeFormatOptions,
	locales: string | string[] = 'en-US'
): string => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}
	const options = opts || defaultOptions

	return new Intl.DateTimeFormat(locales, options).format(date)
}

export const formatNumber = (
	num: number,
	locales: Intl.LocalesArgument = 'en-US',
	options?: Intl.NumberFormatOptions
) => {
	return num.toLocaleString(locales, options)
}

export const uuid = (): number => {
	const time = new Date().getTime()
	const array = time.toString().split('')
	let currentIndex = array.length
	let randomIndex

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		]
	}

	return Number(array.join(''))
}
