import React from 'react';
import Concert from '../components/Concert.jsx';

const Concerts = ({ concertData, amendCartData, setCartActive }) => {
	const allConcerts = concertData.map(data => (
		<Concert
			{...data}
			amendCartData={amendCartData}
			setCartActive={setCartActive}
			key={`concert-${data.id}`}
		/>
	));

	return (
		<div className="concerts">
			<h2>Upcoming Shows</h2>
			{allConcerts}
		</div>
	);
};

export default Concerts;
