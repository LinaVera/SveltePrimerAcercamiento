import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Lina',
		lastName: 'Vera'
	}
});

export default app;