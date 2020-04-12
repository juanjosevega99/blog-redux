import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'

class Publications extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.bringEverything()
    }
  }
  render() {
    return (
      <div>
        <h1>
          Publications of
        </h1>
        { this.props.match.params.key }
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Publications);