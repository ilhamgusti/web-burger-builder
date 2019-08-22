import React from 'react'
import PropTypes from 'prop-types'
import classes from './BuildControl.module.css'

const BuildControl = props => {
	return (
		<div className={classes.BuildControl}>
			<div className={classes.label}>{props.label}</div>
			<button>Less</button>
			<button>More</button>
		</div>
	)
}

BuildControl.propTypes = {
	label: PropTypes.string.isRequired
}

export default BuildControl
