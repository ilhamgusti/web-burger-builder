import React from 'react'
import Button from 'components/UI/Button/Button'

const OrderSummary = props => {
	const ingredientsSum = Object.keys(props.ingredients).map(igKey => (
		<li key={igKey}>
			{igKey}: {props.ingredients[igKey]}
		</li>
	))
	return (
		<div style={{ padding: '10px 10px' }}>
			<h3>Your Order:</h3>
			<p>a delicious Burger with Following Ingredients:</p>
			<ul>{ingredientsSum}</ul>
			<p>
				<strong>Total Price:</strong> $ {props.price.toFixed(2)}
			</p>
			<Button clicked={props.purchaseCancled} btnType="Danger">
				cancel
			</Button>
			<Button clicked={props.purchaseContinued} btnType="Success">
				continue
			</Button>
		</div>
	)
}

export default OrderSummary
