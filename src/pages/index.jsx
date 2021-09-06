import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import Layout from '../components/Layout';

import Splash from '../components/Landing/Splash';

const darkTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#913091',
		},
	},
});

const IndexPage = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseLine />
			<Layout>
				<Splash />
			</Layout>
		</ThemeProvider>
	);
};

export default IndexPage;
