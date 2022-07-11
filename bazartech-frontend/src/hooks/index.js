import * as cookie from 'cookie';
import api from '../services/api';
import jwt_decode from 'jwt-decode';

const isJwtExpired = (token) => Date.now() >= JSON.parse(atob(token.split('.')[1])).exp * 1000;

export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	event.locals.access = cookies.access || null;
	event.locals.refresh = cookies.refresh || null;
	event.locals.user = null;

	const publicUrls = [
		'/',
		'/auth/login/',
		'/auth/sign-up/',
		'/sign-up/',
		'',
		'/auth/login',
		'/auth/sign-up',
		'/sign-up'
	];

	if (!event.locals.access && !publicUrls.includes(event.url.pathname)) {
		return Response.redirect(import.meta.env.VITE_BASE_URL + '/');
	}

	if (event.locals.access && publicUrls.includes(event.url.pathname)) {
		return Response.redirect(import.meta.env.VITE_BASE_URL + '/dashboard');
	}

	if (event.locals.access) {
		if (isJwtExpired(event.locals.access)) {
			event.locals.access = null;
			event.locals.refresh = null;

			const response = await resolve(event);

			return response.redirect('/');
		}

		const { user_id } = jwt_decode(event.locals.access);

		const { data: user } = await api.get(`/auth/users/${String(user_id)}/`, {
			headers: {
				Authorization: `Bearer ${event.locals.access}`
			}
		});

		event.locals.user = user;

		const {
			data: { access }
		} = await api.post('/auth/refresh/', {
			refresh: event.locals.refresh
		});

		event.locals.access = access;
	}

	const response = await resolve(event, { ssr: false });

	return response;
};

export const getSession = (event) => {
	return {
		access: event.locals.access,
		refresh: event.locals.refresh,
		user: event.locals.user
	};
};
