import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from './Logo/Logo';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	splash: {
		padding: theme.spacing(6),
		height: 'calc(100vh)',
	},
}));

const Splash = () => {
	const classes = useStyles();

	return (
		<Grid
			className={classes.splash}
			container
			direction='row'
			justifyContent='center'
			alignItems='center'
			spacing={10}
		>
			<Grid item m={6}>
				<Logo size='400' />
			</Grid>
			<Grid item m={6}>
				<Typography variant='h2' align='center' gutterBottom>
					Conor Broaders
				</Typography>
				<Typography variant='h4' align='center'>
					Web Developer
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Splash;
