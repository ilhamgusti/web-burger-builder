import React from 'react'
import BuildControl from './BuildControl'
import classes from './BuildControlWrapper.module.css'

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Meat', type: 'meat' },
	{ label: 'Cheese', type: 'cheese' }
]

const BuildControlWrapper = () => {
	return (
		<div className={classes.BuildControlWrapper}>
			{controls.map((ctrl, index) => (
				<BuildControl key={index} label={ctrl.label} type={ctrl.type} />
			))}
		</div>
	)
}

export default BuildControlWrapper
