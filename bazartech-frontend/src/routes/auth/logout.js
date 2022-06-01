export const get = () => {
	return {
		status: 302,
		headers: {
			'set-cookie': [
				'access=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT HttpOnly;',
				'refresh=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT HttpOnly;',
				'user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT HttpOnly;'
			],
			location: '/'
		}
	};
};
