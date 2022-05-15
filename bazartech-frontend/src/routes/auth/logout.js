export const get = () => {
	return {
		status: 302,
		headers: {
			'set-cookie': [
				'access=; Path=/dashboard; Expires=Thu, 01 Jan 1970 00:00:00 GMT HttpOnly;',
				'refresh=; Path=/dashboard; Expires=Thu, 01 Jan 1970 00:00:00 GMT HttpOnly;',
				'user=; Path=/dashboard; Expires=Thu, 01 Jan 1970 00:00:00 GMT HttpOnly;'
			],
			location: '/'
		}
	};
};
