import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Splash from './Splash';
import About from './About';
import Skills from './Skills';

const useStyles = makeStyles((theme) => ({
	root: {
		scrollBehavior: 'smooth',
	},
}));

const Landing = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Splash />
			<About />
			<Skills />
		</div>
	);
};

export default Landing;
