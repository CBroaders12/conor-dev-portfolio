import React from 'react';

import Splash from './Splash';
import About from './About';

const Landing = ({ data }) => {
	const { bioText, headshot, job, name } = data.contentfulPageHome;
	return (
		<>
			<Splash name={name} job={job} />
			<About bio={bioText} headshot={headshot} />
		</>
	);
};

export default Landing;
