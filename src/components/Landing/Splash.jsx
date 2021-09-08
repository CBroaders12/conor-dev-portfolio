import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Logo from './Logo/Logo';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		padding: theme.spacing(6),
	},
	splashContainer: {
		maxWidth: theme.breakpoints.values.lg,
	},
	logoContainer: {
		maxWidth: '450px',
		paddingRight: '2rem',
	},
	smallLogoContainer: {
		maxWidth: '300px',
		paddingRight: '0',
	},
}));

const Splash = ({ name, job }) => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Grid
			className={classes.root}
			container
			direction='column'
			justifyContent='space-around'
			alignItems='center'
		>
			<Grid
				className={classes.splashContainer}
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
						{name}
					</Typography>
					<Typography variant='h4' align='center' gutterBottom>
						{job}
					</Typography>
				</Grid>
			</Grid>
			<Grid container item justifyContent='center'>
				<Fab size='large' variant='extended' href='#aboutMe'>
					<Typography variant='button'>About Me</Typography>
					<ExpandMore />
				</Fab>
			</Grid>
		</Grid>
	);
};

export default Splash;
