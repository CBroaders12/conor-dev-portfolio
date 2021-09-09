import React from 'react';

import Splash from './Splash';
import About from './About';

const Landing = ({ data }) => {
	const { bioText, headshot, job, name, tools } = data.contentfulPageHome;
	return (
		<>
			<Splash name={name} job={job} />
			<About bio={bioText} headshot={headshot} tools={tools} />
		</>
	);
};

export default Landing;
