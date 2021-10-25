import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {

    var {profile} = this.props

    return (
      <div>
        <h2>Hello {profile}</h2>
      </div>
    )
  }
}

const mapSateToProps = state => {
	return {
		profile: state.profile
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

export default connect(mapSateToProps, mapDispatchToProps)(Dashboard);