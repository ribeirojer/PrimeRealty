export function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}
export function isValidUrl(url: string): boolean {
	try {
		new URL(url);
		return true;
	} catch (_e) {
		return false;
	}
}
export function isValidEmail(email: string): boolean {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}
export function isValidPhoneNumber(phone: string): boolean {
	const re = /^\+?[1-9]\d{1,14}$/; // E.164 format
	return re.test(phone);
}
export function isValidDate(date: string): boolean {
	const re = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
	if (!re.test(date)) return false;
	const parsedDate = new Date(date);
	return parsedDate instanceof Date && !Number.isNaN(parsedDate.getTime());
}
export function isValidTime(time: string): boolean {
	const re = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:MM format
	return re.test(time);
}
export function isValidDateTime(dateTime: string): boolean {
	const re =
		/^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(\.\d+)?(Z|[+-][01]\d:[0-5]\d)?$/; // ISO 8601 format
	if (!re.test(dateTime)) return false;
	const parsedDate = new Date(dateTime);
	return parsedDate instanceof Date && !Number.isNaN(parsedDate.getTime());
}
