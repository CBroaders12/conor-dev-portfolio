import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import jsLogo from '../../images/icons/js.png';
import tsLogo from '../../images/icons/ts.png';
import cssLogo from '../../images/icons/css.png';
import htmlLogo from '../../images/icons/html.png';
import nodeLogo from '../../images/icons/node.png';
import psqlLogo from '../../images/icons/psql.png';
import reactLogo from '../../images/icons/react.png';
import materialLogo from '../../images/icons/materialui.png';
import githubLogo from '../../images/icons/github.png';

const techIcons = [
	{
		name: 'HTML',
		file: htmlLogo,
	},
	{
		name: 'CSS',
		file: cssLogo,
	},
	{
		name: 'JavaScript',
		file: jsLogo,
	},
	{
		name: 'TypeScript',
		file: tsLogo,
	},
	{
		name: 'React',
		file: reactLogo,
	},
	{
		name: 'Node',
		file: nodeLogo,
	},
	{
		name: 'PostgreSQL',
		file: psqlLogo,
	},
	{
		name: 'Material UI',
		file: materialLogo,
	},
	{
		name: 'GitHub',
		file: githubLogo,
	},
];

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
	techLogo: {
		filter: 'invert(60%)',
		height: '64px',
		marginRight: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

const About = ({ bio, headshot }) => {
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
				<Grid
					container
					item
					xs={12}
					direction='column'
					alignItems='center'
				>
					<Typography variant='h4' gutterBottom>
						My Tools
					</Typography>
					<Grid
						item
						container
						xs={12}
						direction='row'
						alignItems='center'
						justifyContent='center'
					>
						{techIcons.map((item) => (
							<img
								className={classes.techLogo}
								src={item.file}
								alt={item.name}
							/>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default About;
