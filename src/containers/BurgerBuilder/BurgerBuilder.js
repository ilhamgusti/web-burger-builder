import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControlWrapper from '../../components/Burger/BuildControl/BuildControlWrapper'

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}
class BurgerBuilder extends Component {
	// constructor (props) {
	// 	super(props)
	// 	this.state = {...}
	// }

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	}

	handleAddIngredient = type => {
		const oldCount = this.state.ingredients[type]
		const updatedCount = oldCount + 1
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount
		const priceAddition = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice + priceAddition
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
	}
	handleRemoveIngredient = type => {
		const oldCount = this.state.ingredients[type]
		if (oldCount <= 0) {
			return
		}
		const updatedCount = oldCount - 1
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount
		const priceDeduction = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice - priceDeduction
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
	}
	render() {
		const disabledInfo = {
			...this.state.ingredients
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return (
			<>
				<Burger ingredients={this.state.ingredients} />
				<div>
					<BuildControlWrapper
						ingredientAdd={this.handleAddIngredient}
						ingredientRemoved={this.handleRemoveIngredient}
						disabled={disabledInfo}
						price={this.state.totalPrice}
					/>
				</div>
			</>
		)
	}
}

export default BurgerBuilder
