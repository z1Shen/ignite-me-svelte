import App from './App.svelte';
import "@picocss/pico";

const app = new App({
	target: document.body,
	props: {
		// name: 'world'
	}
});

export default app;