import React from 'react';
import { priceTo2Decimals } from '../helpers.js';

const Ticket = ({artist, locale, price, amount, totalPrice}) => {
	const displayTotal = priceTo2Decimals(totalPrice);

	return (
		<div className="ticket">
			<p className="ticket-info">{`${artist} @ ${locale}: $${price} x ${amount}`}</p>
			<p className="ticket-total">{`$${displayTotal}`}</p>
		</div>
	);
};

export default Ticket;
