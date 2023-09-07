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
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}
	const options = opts || defaultOptions

	return new Intl.DateTimeFormat(locales, options).format(date)
}
