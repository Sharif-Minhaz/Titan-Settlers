export function isEmptyObject(obj) {
	if (obj === null || typeof obj !== "object") {
		return true; // If obj is null or not an object, consider it empty
	}

	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			return false; // If there's at least one property, it's not empty
		}
	}
	return true; // If no properties are found, it's an empty object
}

