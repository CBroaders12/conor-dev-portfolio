import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';

import headshot from '../../images/conor-broaders-headshot-square.png';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
		height: '100vh',
	},
	container: {
		maxWidth: theme.breakpoints.values.lg,
	},
	paper: {
		width: '100%',
		backgroundColor: theme.palette.background.main,
		overflow: 'hidden',
		borderRadius: '50%',
	},
	headshot: {
		height: 'auto',
		width: '100%',
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<Grid
			id='aboutMe'
			className={classes.root}
			container
			direction='column'
			justifyContent='space-evenly'
			alignItems='center'
		>
			<Grid
				className={classes.container}
				container
				direction='row'
				alignItems='center'
				justifyContent='center'
				spacing={10}
			>
				<Grid item xs={12} md={5}>
					<Paper elevation={8} className={classes.paper}>
						<img
							src={headshot}
							alt='Conor Broaders'
							className={classes.headshot}
						/>
					</Paper>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography paragraph variant='body1' align='left'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Reiciendis tempora perspiciatis tenetur incidunt
						dolor. Asperiores dolore ipsam tempore aliquam,
						laudantium tempora voluptatum, nostrum nesciunt
						doloribus consequatur earum voluptates eligendi itaque!
					</Typography>
					<Typography paragraph variant='body1' align='left'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Reiciendis tempora perspiciatis tenetur incidunt
						dolor. Asperiores dolore ipsam tempore aliquam,
						laudantium tempora voluptatum, nostrum nesciunt
						doloribus consequatur earum voluptates eligendi itaque!
					</Typography>
					<Typography paragraph variant='body1' align='left'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Reiciendis tempora perspiciatis tenetur incidunt
						dolor. Asperiores dolore ipsam tempore aliquam,
						laudantium tempora voluptatum, nostrum nesciunt
						doloribus consequatur earum voluptates eligendi itaque!
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default About;
