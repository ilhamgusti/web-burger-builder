import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControlWrapper from '../../components/Burger/BuildControl/BuildControlWrapper'

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
		}
	}
	render() {
		return (
			<>
				<Burger ingredients={this.state.ingredients} />
				<div>
					<BuildControlWrapper />
				</div>
			</>
		)
	}
}

export default BurgerBuilder
