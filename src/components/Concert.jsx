import React, { useState } from 'react';
import { formatDateStr, priceTo2Decimals } from '../helpers.js';

const Concert = ({
	id,
	artist,
	locale,
	date,
	price,
	amendCartData,
	setCartActive,
}) => {
	const [ticketAmount, setTicketAmount] = useState(1);

	const onChangeTicketAmount = e => {
		const { currentTarget } = e;
		if (!currentTarget.checkValidity()) currentTarget.value = 1;
		const amount = parseInt(currentTarget.value);
		setTicketAmount(amount);
	};

	const onUpdateCart = () => {
		const totalPrice = price * ticketAmount;
		amendCartData({ id, artist, locale, date, price, amount: ticketAmount, totalPrice});
		setCartActive(true);
	};

	const dateStr = formatDateStr(date);
	const price2Decimals = priceTo2Decimals(price);

	return (
		<div className="concert">
			<h3 className="concert_artist">{artist}</h3>
			<div className="concert_details">
				<p className="concert_location">{`@ ${locale}`}</p>
				<p className="concert_date">{dateStr}</p>
				<p className="concert_price">{`$${price2Decimals}`}</p>
			</div>
			<form className="concert_form">
				<fieldset>
					<label htmlFor={`amt-${id}`} className="ticket-amt_label">
						Number of tickets:
					</label>
					<input
						className="ticket-amt"
						id={`amt-${id}`}
						type="number"
						min="0"
						max="12"
						step="1"
						defaultValue={1}
						onChange={onChangeTicketAmount}
					/>
					<button
						className="concert_add"
						type="button"
						onClick={onUpdateCart}
					>
						Update cart
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default Concert;
