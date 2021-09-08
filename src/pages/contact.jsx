import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { LinkedIn, GitHub } from '@material-ui/icons';

import Layout from '../components/Layout/Layout';
import ContactForm from '../components/Contact/ContactForm';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(8),
		paddingLeft: theme.spacing(5),
	},
	contentItem: {
		padding: theme.spacing(2),
	},
	socialIcons: {
		fontSize: '60px',
		margin: theme.spacing(1),
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
					xs={12}
					md={6}
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
						<Typography gutterBottom>
							Feel free to connect with me on the social platforms
							I frequent.
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
				</Grid>
				<Grid container item md>
					<ContactForm />
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Contact;
