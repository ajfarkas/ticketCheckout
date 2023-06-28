import React from 'react';

const Checkout = ({ setActive }) => {
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
		</aside>
	);
};

export default Checkout;
