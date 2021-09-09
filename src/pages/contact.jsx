import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { LinkedIn, GitHub } from '@material-ui/icons';

import Layout from '../components/Layout/Layout';
import ContactBlurb from '../components/Contact/ContactBlurb';
import ContactForm from '../components/Contact/ContactForm';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(8),
		paddingLeft: theme.spacing(2),
	},
	textContent: {
		marginRight: theme.spacing(4),
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
			>
				<Grid
					container
					item
					direction='column'
					justifyContent='center'
					xs={12}
					md={6}
					className={classes.textContent}
				>
					<ContactBlurb />
				</Grid>
				<Grid container item md>
					<ContactForm />
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Contact;
