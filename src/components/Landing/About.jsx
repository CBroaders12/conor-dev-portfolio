import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import ToolsContainer from './ToolsContainer';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
		minHeight: '100vh',
	},
	container: {
		maxWidth: theme.breakpoints.values.lg,
	},
	paper: {
		width: '100%',
		backgroundColor: theme.palette.background.main,
		overflow: 'hidden',
		borderRadius: '50%',
		maxWidth: '500px',
	},
	headshot: {
		height: 'auto',
		width: '100%',
	},
}));

const About = ({ bio, headshot, tools }) => {
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
				<Grid item container justifyContent='center' xs={12} md={5}>
					<Paper elevation={8} className={classes.paper}>
						<img
							src={headshot.file.url}
							alt='Conor Broaders'
							className={classes.headshot}
						/>
					</Paper>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography paragraph variant='body1' align='left'>
						<span
							dangerouslySetInnerHTML={{
								__html: bio.childMarkdownRemark.html,
							}}
						></span>
					</Typography>
				</Grid>
				<ToolsContainer tools={tools} />
			</Grid>
		</Grid>
	);
};

export default About;
