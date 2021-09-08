import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		padding: theme.spacing(2),
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant='body1' align='center'>
				Copyright © {new Date().getFullYear()}.
			</Typography>
			<Typography
				variant='subtitle1'
				color='textSecondary'
				align='center'
			>
				Built with{' '}
				<MuiLink
					href='https://material-ui.com/'
					color='inherit'
					target='_blank'
					referrerPolicy='no-referrer'
					rel='no-rel'
				>
					Material UI
				</MuiLink>
			</Typography>
		</footer>
	);
};

export default Footer;
