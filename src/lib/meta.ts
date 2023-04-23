import { writable } from 'svelte/store';

export interface AvailableMeta {
	ty: 'summary' | 'summary_large_image';
	t: string;
	d: string;
	th: string;
	i: string;
}

export const placeholders: AvailableMeta = {
	t: 'Rickhider - Custom Rickroll Generator',
	d: 'Rickroll your friends by decieving them with custom metadata.',
	th: '#843c33',
	ty: 'summary',
	i: globalThis.window ? `${window.location.protocol}//${window.location.host}/favicon.png` : ''
};
export const labels: AvailableMeta = {
	t: 'Title',
	d: 'Description',
	th: 'Theme Color',
	ty: 'Type',
	i: 'Image'
};

export const metaStore = writable<AvailableMeta>({
	ty: 'summary',
	t: '',
	d: '',
	th: '',
	i: ''
});
