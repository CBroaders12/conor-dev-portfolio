import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100vh',
		backgroundColor: theme.palette.background.paper,
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<Grid
			id='aboutMe'
			className={classes.container}
			container
			direction='row'
			alignItems='center'
			justifyContent='center'
		>
			<Typography variant='h1'>About Me</Typography>
		</Grid>
	);
};

export default About;
