import React, {useEffect, useState} from 'react';

import Concerts from './pages/Concerts.jsx';
import Checkout from './pages/Checkout.jsx';

const App = () => {
	const [concertData, setConcertData] = useState([]);
	const [cartActive, setCartActive] = useState(false);

	useEffect(() => {
		fetch('./public/concerts.json')
			.then(d => d.json())
			.then(d => setConcertData(d));
	}, []);

	const onCheckoutSelect = () => {
		setCartActive(true);
	};

	return (
		<div id="app">
			<h1>ConcertMaster</h1>
			<button id="checkout-button" type="button" onClick={onCheckoutSelect}>Checkout</button>
			{concertData.length
				? <Concerts concertData={concertData} />
				: <p>Loading…</p>
			}
			{cartActive ? <Checkout setActive={setCartActive} /> : null}
		</div>
	);
};

export default App;
