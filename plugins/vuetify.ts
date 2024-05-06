import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { ar, en } from 'vuetify/locale';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const monvestor = {
	dark: false,
	colors: {
		primary: '#033786',
		secondary: '#F19DBB',
		gray: '#EBEBEB'
	},
};

export default defineNuxtPlugin(({ vueApp }) => {
	const vuetify = createVuetify({
		ssr: true,
		locale: {
			fallback: 'en',
			messages: { ar, en },
		},
		defaults: {
			global: {
				elevation: 0,
			},
			VBtn: {
				style: 'letter-spacing: 0; text-transform: capitalize',
				rounded: 'lg',
				height: '44px',
			},
			VTextField: {
				density: 'compact',
				hideDetails: 'auto',
				color: monvestor.colors.primary,
				variant: 'outlined',
				rounded: 'lg',
			},
			VTextarea: {
				density: 'compact',
				hideDetails: 'auto',
				color: monvestor.colors.primary,
				variant: 'outlined',
				rounded: 'lg',
			},
			VSelect: {
				density: 'compact',
				hideDetails: 'auto',
				color: monvestor.colors.primary,
				variant: 'outlined',
				rounded: 'lg',
			},
			VAutocomplete: {
				density: 'compact',
				hideDetails: 'auto',
				color: monvestor.colors.primary,
				variant: 'outlined',
				rounded: 'lg',
			},
			VFileInput: {
				density: 'compact',
				hideDetails: 'auto',
				color: monvestor.colors.primary,
				variant: 'outlined',
				rounded: 'lg',
			},
			VCheckbox: {
				hideDetails: 'auto',
			},
			VRadioGroup: {
				color: 'primary',
			},
			VToggle: {
				hideDetails: 'auto',
			},
		},
		theme: {
			defaultTheme: 'monvestor',
			themes: {
				monvestor,
			},
		},
		components,
		directives,
	});

	vueApp.use(vuetify);
});
