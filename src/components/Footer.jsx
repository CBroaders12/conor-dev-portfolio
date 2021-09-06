import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant='body1' color='textSecondary' align='center'>
				Copyright © {new Date().getFullYear()}
			</Typography>
		</footer>
	);
};

export default Footer;
