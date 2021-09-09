import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';

import { LinkedIn, GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	contentItem: {
		padding: theme.spacing(2),
	},
	socialIcons: {
		fontSize: '60px',
		margin: theme.spacing(1),
	},
}));

const ContactBlurb = () => {
	const classes = useStyles();

	return (
		<>
			<Grid item className={classes.contentItem}>
				<Typography variant='h3' align='left' gutterBottom>
					Reach Out
				</Typography>
				<Typography gutterBottom>
					If you've made it here drop me a message. Whether you want
					to collaborate on a project, hire me, or just say hello, all
					messages are welcome. Fill out the contact form or shoot me
					an email at conor dot broaders at gmail dot com.
				</Typography>
			</Grid>
			<Divider />
			<Grid item className={classes.contentItem}>
				<Typography variant='h3' align='left' gutterBottom>
					Connect
				</Typography>
				<Typography gutterBottom>
					Feel free to connect with me on the social platforms I
					frequent.
				</Typography>
				<Link
					href='https://www.linkedin.com/in/conor-broaders/'
					target='_blank'
					color='inherit'
				>
					<LinkedIn className={classes.socialIcons} />
				</Link>
				<Link
					href='https://github.com/CBroaders12'
					target='_blank'
					color='inherit'
				>
					<GitHub className={classes.socialIcons} />
				</Link>
			</Grid>
		</>
	);
};

export default ContactBlurb;
