import React from 'react';

const Checkout = ({ setActive, cartData }) => {
	return (
		<aside id="checkout">
			<button
				id="checkout-close"
				type="button"
				onClick={() => {
					setActive(false);
				}}
			></button>
			<p>checkout</p>
			<p>{JSON.stringify(cartData)}</p>
		</aside>
	);
};

export default Checkout;
