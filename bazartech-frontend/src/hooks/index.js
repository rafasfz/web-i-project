import * as cookie from 'cookie';
import api from '../services/api';

export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	event.locals.access = cookies.access || null;

	if (event.locals.access) {
		const { data: user } = await api.get('/auth/users/me/', {
			headers: {
				Authorization: `Bearer ${event.locals.access}`
			}
		});

		event.locals.user = user;
		console.log(user);
	}

	const response = await resolve(event);

	return response;
};

export const getSession = (event) => {
	return {
		access: event.locals.access,
		refresh: event.locals.refresh,
		user: event.locals.user
	};
};
