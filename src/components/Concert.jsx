import React from 'react';

const Concert = ({
	artist,
	locale,
	date,
	price
}) => {
	return (
		<div className="concert">
			<h3 className="concert_artist">{artist}</h3>
			<p className="concert_location">{locale}</p>
			<p className="concert_date">{date}</p>
			<p className="concert_price">{price}</p>
		</div>
	);
};

export default Concert;
