import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(6),
		height: '100vh',
	},
	container: {
		maxWidth: theme.breakpoints.values.lg,
	},
	paper: {
		width: '100%',
		padding: theme.spacing(3),
	},
}));

const Skills = () => {
	const classes = useStyles();

	return (
		<Grid
			id='skills'
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
				spacing={0}
			>
				<Paper className={classes.paper}>
					<Grid
						className={classes.container}
						container
						direction='row'
						alignItems='center'
						justifyContent='center'
						spacing={0}
					>
						<Grid
							item
							container
							direction='column'
							justifyContent='space-between'
							md={4}
						>
							<Typography variant='h4' align='center'>
								Front-End
							</Typography>
							<List>
								<ListItem>
									<ListItemText primary='HTML' />
								</ListItem>
								<ListItem>
									<ListItemText primary='CSS' />
								</ListItem>
								<ListItem>
									<ListItemText primary='JavaScript' />
								</ListItem>
								<ListItem>
									<ListItemText primary='React' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Bootstrap' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Material UI' />
								</ListItem>
							</List>
						</Grid>
						<Divider orientation='vertical' flexItem />
						<Grid
							item
							container
							direction='column'
							justifyContent='space-between'
							md
						>
							<Typography variant='h4' align='center'>
								Back-End
							</Typography>
							<List>
								<ListItem>
									<ListItemText primary='Node JS' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Java' />
								</ListItem>
								<ListItem>
									<ListItemText primary='PostgreSQL' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Sequelize' />
								</ListItem>
								<ListItem>
									<ListItemText primary='REST APIs' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Swagger' />
								</ListItem>
							</List>
						</Grid>
						<Divider orientation='vertical' flexItem />
						<Grid
							item
							container
							direction='column'
							justifyContent='space-between'
							md={4}
						>
							<Typography variant='h4' align='center'>
								Tools
							</Typography>
							<List>
								<ListItem>
									<ListItemText primary='VS Code' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Figma' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Terminal' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Postman' />
								</ListItem>
								<ListItem>
									<ListItemText primary='Git' />
								</ListItem>
								<ListItem>
									<ListItemText primary='GitHub' />
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Skills;
