export const get = async () => {
	return {
		status: 302,
		headers: {
			'set-cookie': [
				'access=; refresh=; user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly'
			],
			location: '/'
		}
	};
};
