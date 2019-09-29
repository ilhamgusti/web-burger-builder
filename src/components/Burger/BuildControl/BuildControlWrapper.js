import React from 'react'

import BuildControl from './BuildControl'
import classes from './BuildControlWrapper.module.css'

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Meat', type: 'meat' },
	{ label: 'Cheese', type: 'cheese' }
]

const BuildControlWrapper = props => {
	return (
		<div className={classes.BuildControlWrapper}>
			<p>
				Current Price: <strong>$ {props.price.toFixed(2)}</strong>
			</p>
			{controls.map(ctrl => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientAdd(ctrl.type)}
					removed={() => props.ingredientRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<button
				className={classes.OrderButton}
				disabled={!props.purchaseable}
				onClick={props.ordered}
			>
				ORDER NOW
			</button>
		</div>
	)
}

export default BuildControlWrapper
