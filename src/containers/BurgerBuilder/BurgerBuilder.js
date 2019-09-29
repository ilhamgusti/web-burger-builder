import React, { Component } from 'react'
import BuildControlWrapper from '../../components/Burger/BuildControl/BuildControlWrapper'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Burger from '../../components/Burger/Burger'

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}
class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		purchase: false,
		purchasing: false,
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
		this.updatePurchaseState(updatedIngredients)
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
		this.updatePurchaseState(updatedIngredients)
	}
	updatePurchaseState = ingredients => {
		const sum = Object.keys(ingredients)
			.map(igKey => ingredients[igKey])
			.reduce((sum, el) => {
				return sum + el
			}, 0)
		this.setState({ purchaseable: sum > 0 })
	}
	purchaseHandler = () => {
		this.setState({ purchasing: true })
	}
	handleCloseModal = () => {
		this.setState({ purchasing: false })
	}
	handleContinuePurchase = () => alert('You Continue!')
	render() {
		const disabledInfo = {
			...this.state.ingredients
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return (
			<>
				<Modal show={this.state.purchasing} closeModal={this.handleCloseModal}>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCancled={this.handleCloseModal1}
						purchaseContinued={this.handleContinuePurchase}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<div>
					<BuildControlWrapper
						ingredientAdd={this.handleAddIngredient}
						ingredientRemoved={this.handleRemoveIngredient}
						disabled={disabledInfo}
						price={this.state.totalPrice}
						ordered={this.purchaseHandler}
						purchaseable={this.state.purchaseable}
					/>
				</div>
			</>
		)
	}
}

export default BurgerBuilder
