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

const backupBio = (
	<Typography gutterBottom>
		Hi! I'm Conor and I am a Web Developer currently based in Indianapolis,
		IN. My journey in coding started last year when I started teaching
		myself basic computer science with Python. As I learned more I was drawn
		to web development in particular and attended Eleven Fifty Academy's Web
		Development Bootcamp. In that program I discovered a passion for
		building sleek and elegant front-end applications along with robust and
		functional APIs to power those applications.
		<br />
		<br />
		Since graduating Eleven Fifty, I have been continuing to learn more and
		push myself into new technologies and skills. My passion is education
		and learning, and I do my absolute best to share what I know with other
		learners, which I do regularly as a Learning Assistant at the very
		bootcamp I attended.
		<br />
		<br />
		In addition to development I am also a musician, specifically a
		classical singer. When I am not designing websites, building servers, or
		researching technologies, odds are you can find me learning new music or
		digging up interesting songs both new and old.
	</Typography>
);

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
					{bio.childMarkdownRemark.html ? (
						<Typography paragraph variant='body1' align='left'>
							<span
								dangerouslySetInnerHTML={{
									__html: bio.childMarkdownRemark.html,
								}}
							></span>
						</Typography>
					) : (
						backupBio
					)}
				</Grid>
				<ToolsContainer tools={tools} />
			</Grid>
		</Grid>
	);
};

export default About;
