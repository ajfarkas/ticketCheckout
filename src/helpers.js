// formats date string
export const formatDateStr = date => (
	(new Date(date)).toDateString().replace(/\s\d{4}$/, d => `, ${d}`)
);
// Display price to 2 decimal places
export const priceTo2Decimals = price => (
	price.toPrecision(parseInt(price).toString().length + 2)
);
