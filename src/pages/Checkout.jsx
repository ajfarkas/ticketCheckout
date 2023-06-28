import React, { useState } from 'react';
import Ticket from '../components/Ticket.jsx';
import { priceTo2Decimals } from '../helpers.js';

const Checkout = ({ setActive, cartData }) => {
	const [formIsValid, setFormValidity] = useState(false);
	const cartValues = Object.values(cartData);
	const totalPrice = cartValues.reduce((acc, val) => (
		acc + val.totalPrice
	), 0);
	let tickets = (<p>Your cart is empty</p>);

	const onFormUpdate = e => {
		if (e.currentTarget.checkValidity()) setFormValidity(true);
	};

	if (cartValues.length) tickets = cartValues.map(val => (
		<Ticket {...val} key={`ticket-${val.id}`} />
	));

	const onSubmitPayment = () => {
		alert('Payment was pseudo-submitted.');
	};

	return (
		<aside id="checkout">
			<button
				id="checkout-close"
				type="button"
				onClick={() => {
					setActive(false);
				}}
			></button>
			<h2>checkout</h2>
			<div className="checkout-container">
				<div className="checkout-breakdown">
					<div className="breakdown-total">
						<h3>Total</h3>
						<p className="breakdown-total_price">{`$${priceTo2Decimals(totalPrice)}`}</p>
					</div>
					<div className="breakdown-tickets">
						<h4>Tickets</h4>
						{tickets}
					</div>
				</div>
				<div className="payment-breakdown">
					<h3>Payment</h3>
					<form id="payment" onChange={onFormUpdate}>
						<fieldset>
							<h4>Pay with credit / debit card</h4>
							<label className="payment-label">
								<p>Card Number</p>
								<input
									required
									autoComplete="cc-number"
									id="number"
									name="number"
									type="text"
									inputMode="numeric"
									pattern="[0-9]*"
								/>
							</label>
							<label className="payment-label">
								<p>Name on Card</p>
								<input
									required
									autoComplete="cc-name"
									id="name"
									name="name"
									type="text"
								/>
							</label>
							<label className="payment-label">
								<p>Expiration Date</p>
								<input
									required
									autoComplete="cc-exp"
									id="expiry"
									name="expiry"
									type="text"
									inputMode="numeric"
									pattern="[0-9]*"
								/>
							</label>
							<label className="payment-label">
								<p>Security Code</p>
								<input
									required
									autoComplete="cc-csc"
									id="security-code"
									name="security-code"
									type="text"
									inputMode="numeric"
									pattern="[0-9]*"
								/>
							</label>
							<button
								type="button"
								id="payment-submit"
								onClick={onSubmitPayment}
								disabled={!formIsValid}
							>
								Pay Now
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</aside>
	);
};

export default Checkout;
