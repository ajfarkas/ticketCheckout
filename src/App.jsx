import React, {useEffect, useState} from 'react';

import Concerts from './pages/Concerts.jsx';
import Checkout from './pages/Checkout.jsx';

const App = () => {
	const [concertData, setConcertData] = useState([]);
	const [cartActive, setCartActive] = useState(false);
	const [cartData, setCartData] = useState({});
	let concerts = (<p>Loading…</p>);

	useEffect(() => {
		fetch('./public/concerts.json')
			.then(d => d.json())
			.then(d => setConcertData(d));
	}, []);

	const onCheckoutSelect = () => {
		setCartActive(true);
	};

	const amendCartData = newData => {
		const newCartData = Object.assign({}, cartData);
		if (!newData.amount) delete newCartData[newData.id];
		else newCartData[newData.id] = newData;

		setCartData(newCartData);
	};

	if (concertData.length) concerts = (
		<Concerts
			concertData={concertData}
			amendCartData={amendCartData}
			setCartActive={setCartActive}
		/>
	);

	return (
		<div id="app">
			<h1>ConcertMaster</h1>
			<button id="checkout-button" type="button" onClick={onCheckoutSelect}>Checkout</button>
			{concerts}
			{cartActive ? <Checkout setActive={setCartActive} cartData={cartData} /> : null}
		</div>
	);
};

export default App;
