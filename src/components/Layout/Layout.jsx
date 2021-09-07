import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const darkTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#913091',
			dark: '#660A66',
			light: '#A54DA5',
		},
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html: {
					scrollBehavior: 'smooth',
				},
			},
		},
	},
});

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Header />
			{children}
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
