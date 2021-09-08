import {
	Grid,
	makeStyles,
	Typography,
	Paper,
	Divider,
} from '@material-ui/core';
import React from 'react';

import Layout from '../components/Layout/Layout';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(8),
		paddingLeft: theme.spacing(5),
	},
	paper: {
		padding: theme.spacing(4),
		width: '90%',
	},
	contentItem: {
		padding: theme.spacing(2),
	},
}));

const Contact = () => {
	const classes = useStyles();

	return (
		<Layout>
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				className={classes.container}
				spacing={4}
			>
				<Grid
					container
					item
					direction='column'
					// alignItems='center'
					justifyContent='center'
					xs={6}
				>
					<Grid item className={classes.contentItem}>
						<Typography variant='h3' align='left' gutterBottom>
							Reach Out
						</Typography>
						<Typography gutterBottom>
							If you've made it here drop me a message. Whether
							you want to collaborate on a project, hire me, or
							just say hello, all messages are welcome. Fill out
							the contact form or shoot me an email at conor dot
							broaders at gmail dot com.
						</Typography>
					</Grid>
					<Divider />
					<Grid item className={classes.contentItem}>
						<Typography variant='h3' align='left' gutterBottom>
							Connect
						</Typography>
						<Typography>
							Feel free to connect with me on the social platforms
							I frequent.
						</Typography>
					</Grid>
				</Grid>
				<Grid container item xs>
					<Paper className={classes.paper}>
						<Typography>Contact Form</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Contact;
