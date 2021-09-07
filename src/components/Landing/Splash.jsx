import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Logo from './Logo/Logo';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	splash: {
		padding: theme.spacing(6),
		height: '100vh',
	},
	logoContainer: {
		maxWidth: '450px',
		paddingRight: '2rem',
	},
	smallLogoContainer: {
		maxWidth: '300px',
		paddingRight: '0',
	},
	buttonContainer: {
		alignSelf: 'flex-end',
	},
}));

const Splash = () => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Grid
			className={classes.splash}
			container
			direction='column'
			justifyContent='space-around'
			alignItems='center'
		>
			<Grid
				// className={classes.splash}
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				<Grid
					item
					xs={12}
					md={6}
					className={
						matches
							? classes.logoContainer
							: classes.smallLogoContainer
					}
				>
					<Logo size='100%' />
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography variant='h2' align='center' gutterBottom>
						Conor Broaders
					</Typography>
					<Typography variant='h4' align='center'>
						Web Developer
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				item
				justifyContent='center'
				className={classes.buttonContainer}
			>
				<Fab size='large' href='#aboutMe'>
					<ExpandMore />
				</Fab>
			</Grid>
		</Grid>
	);
};

export default Splash;
