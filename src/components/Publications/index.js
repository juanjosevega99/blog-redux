import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'
import * as publicationsActions from '../../actions/usersActions'

const { bringEverything: usersBringEverything } = usersActions
const { bringEverything: publicationsBringEverything } = publicationsActions

class Publications extends Component {
  componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      this.props.usersBringEverything()
    }
  }
  render() {
    console.log(this.props)
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

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return {
    usersReducer,
    publicationsReducer
  }
}

const mapDispatchToProps = {
  usersBringEverything,
  publicationsBringEverything
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);