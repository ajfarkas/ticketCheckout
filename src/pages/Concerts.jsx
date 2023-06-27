import React from 'react';
import Concert from '../components/concert.jsx';

const Concerts = ({ concertData }) => {
	const allConcerts = concertData.map(data => (
		<Concert {...data} />
	));

	return (
		<div className="concerts">
			<h2>Upcoming Shows</h2>
			{allConcerts}
		</div>
	);
};

export default Concerts;
