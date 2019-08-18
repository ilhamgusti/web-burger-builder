import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const Burger = props => {
	const transformIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />
			})
		})
		.reduce((arr, el) => {
			return arr.concat(el)
		}, [])
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	)
}

export default Burger
