import { browser } from '$app/env';
import { writable } from 'svelte/store';

let storedUser = null;

if (browser.localStorage) {
	// Verifica se o user bate com o token

	storedUser = JSON.parse(localStorage.getItem('bazartech@user'));
}

export const user = writable(storedUser);
