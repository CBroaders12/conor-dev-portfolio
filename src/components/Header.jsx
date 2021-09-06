import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
	return (
		<AppBar position='sticky'>
			<ToolBar>
				<Typography variant='h6'>Conor Broaders</Typography>
			</ToolBar>
		</AppBar>
	);
};

export default Header;
