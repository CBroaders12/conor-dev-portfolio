import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery, useTheme } from '@material-ui/core';

import ToolIcon from './ToolIcon';

const ToolsContainer = ({ tools }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Grid container item xs={12} direction='column' alignItems='center'>
			<Typography variant='h4' gutterBottom>
				My Tools
			</Typography>
			<Grid
				item
				container
				xs={12}
				direction={matches ? 'row' : 'column'}
				alignItems='center'
				justifyContent='center'
			>
				{tools.map((tool) => (
					<ToolIcon
						key={tool.name}
						src={tool.icon.file.url}
						alt={tool.name}
					/>
				))}
			</Grid>
		</Grid>
	);
};

export default ToolsContainer;
