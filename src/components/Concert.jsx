import React from 'react';

const Concert = ({
	id,
	artist,
	locale,
	date,
	price
}) => {
	const onAddToCart = () => {
		console.log(id, 'added to cart');
	};

	return (
		<div className="concert">
			<h3 className="concert_artist">{artist}</h3>
			<div className="concert_details">
				<p className="concert_location">{locale}</p>
				<p className="concert_date">{date}</p>
				<p className="concert_price">{price}</p>
			</div>
			<form>
				<fieldset>
					<label htmlFor={`amt-${id}`} className="ticket_amt-label">
						Number of tickets:
					</label>
					<input
						className="ticket_amt"
						id={`amt-${id}`}
						type="number"
						min="1"
						max="12"
						step="1"
						defaultValue="1"
					/>
					<button className="concert-add" type="button" onClick={onAddToCart}>Add to cart</button>
				</fieldset>
			</form>
		</div>
	);
};

export default Concert;
