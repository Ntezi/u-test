export function isExists<T>(value: T | null | undefined): value is T {
	if (value === undefined || value === null) return false;

	switch (typeof value) {
		case 'string':
			return value !== '';
		case 'object':
			return Array.isArray(value) ? value.length > 0 : Object.keys(value).length > 0;
		case 'boolean':
			return true;
		case 'number':
			return true;
	}
	return false;
}
