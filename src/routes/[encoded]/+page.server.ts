import { error } from '@sveltejs/kit';
import type { AvailableMeta } from '$lib/types.ts';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	try {
		if (!params.encoded) throw error(404, 'Not found');
		const decoded = Buffer.from(params.encoded, 'base64').toString('utf-8');
		const data: AvailableMeta = Object.fromEntries(new URLSearchParams(decoded).entries());
		return data;
	} catch (e) {
		// TODO worst case scenario for user should be render page without metadata
		throw error(404, 'Not found');
	}
}
