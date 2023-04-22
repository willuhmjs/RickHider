import { writable } from 'svelte/store';

export interface AvailableMeta {
	ty: 'summary' | 'summary_large_image';
	t: string;
	d: string;
	th: string;
	i: string;
}

export const placeholders: AvailableMeta = {
	t: 'GitHub: Let’s build from here',
	d: 'GitHub is where over 100 million developers shape the future of software, together. Contribute to the open source community...',
	th: '#1e2327',
	ty: 'summary',
	i: 'https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png'
};
export const labels: AvailableMeta = {
	t: 'Title',
	d: 'Description',
	th: 'Theme Color',
	ty: 'Type',
	i: 'Image'
};

export const metaStore =  writable<AvailableMeta>({
	ty: 'summary',
	t: '',
	d: '',
	th: '',
	i: ''
});
