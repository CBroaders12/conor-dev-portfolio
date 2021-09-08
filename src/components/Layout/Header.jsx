import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';

import monochromeLogo from '../../images/LogoMonochromeWhite.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	logo: {
		marginRight: theme.spacing(2),
		height: '40px',
	},
	header: {
		height: '64px',
	},
	title: {
		flexGrow: 1,
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='sticky' className={classes.header}>
			<ToolBar>
				<Link to='/'>
					<img
						className={classes.logo}
						src={monochromeLogo}
						alt='Conor Broaders Logo'
					/>
				</Link>
				<Typography variant='h6' className={classes.title}>
					Conor Broaders
				</Typography>
				<Typography>
					<Link to='/contact' color='inherit'>
						Contact
					</Link>
				</Typography>
			</ToolBar>
		</AppBar>
	);
};

export default Header;
