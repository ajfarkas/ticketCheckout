import {React, useEffect, useState} from 'react';

import Concerts from './pages/concerts.jsx';
import Checkout from './pages/checkout.jsx';

const App = () => {
	const [concertData, setConcertData] = useState([]);
	useEffect(() => {
		fetch('./public/concerts.json')
			.then(d => d.json())
			.then(d => setConcertData(d));
	}, []);

	return (
		<main>
			<h1>ConcertMaster</h1>
			<Concerts concertData={concertData} />
		</main>
	);
};

export default App;
