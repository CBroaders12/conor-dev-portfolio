import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ContactForm from './ContactForm';
import ContactBlurb from './ContactBlurb';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(8),
		paddingLeft: theme.spacing(2),
	},
	textContent: {
		marginRight: theme.spacing(4),
	},
}));

const ContactPage = () => {
	const classes = useStyles();

	return (
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
	);
};

export default ContactPage;
