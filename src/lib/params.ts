import { writable } from 'svelte/store';
import type { AvailableMeta } from '$lib/types';
export default writable<AvailableMeta>({
	ty: 'summary',
	t: '',
	d: '',
	th: '',
	i: ''
});
