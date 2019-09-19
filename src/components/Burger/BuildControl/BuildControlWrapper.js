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
					added={() => props.ingredientAdd(ctrl.type)}
			))}
		</div>
	)
}

export default BuildControlWrapper
