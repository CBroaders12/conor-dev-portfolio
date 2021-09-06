import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import monochromeLogo from '../images/LogoMonochromeWhite.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	logo: {
		marginRight: theme.spacing(2),
		height: '40px',
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='sticky'>
			<ToolBar>
				<img
					className={classes.logo}
					src={monochromeLogo}
					alt='Conor Broaders Logo'
				/>
				<Typography variant='h6'>Conor Broaders</Typography>
			</ToolBar>
		</AppBar>
	);
};

export default Header;
