import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	toolIcon: {
		filter: 'invert(60%)',
		height: '64px',
		marginRight: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function ToolIcon(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('sm'));

	return matches ? (
		<img src={props.src} alt={props.alt} className={classes.toolIcon} />
	) : (
		<Typography variant='h6' color='textSecondary' gutterBottom>
			{props.alt}
		</Typography>
	);
}

export default ToolIcon;
