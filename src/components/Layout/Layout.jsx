import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

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

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	main: {
		minHeight: 'calc(100vh - 84px - 64px)',
	},
}));

const Layout = ({ children }) => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Header />
			<Container
				component='main'
				maxWidth={false}
				disableGutters
				className={classes.main}
			>
				{children}
			</Container>
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
