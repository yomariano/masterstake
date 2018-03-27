export function getItem(key, errCb = () => {}) {
	try {
		const value = window.localStorage.getItem(key);
		return JSON.parse(value);
	} catch (error) {
		errCb(error);
	}
}

export function setItem(key, value, errCb = () => {}) {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		errCb(error);
	}
}

export function removeItem(key) {
	setItem(key, undefined);
}
