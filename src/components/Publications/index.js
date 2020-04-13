import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'
import * as publicationsActions from '../../actions/publicationsActions'

const { bringEverything: usersBringEverything } = usersActions
const { bringForUser: publicationsBringForUser } = publicationsActions

class Publications extends Component {
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      await this.props.usersBringEverything()
    }
    this.props.publicationsBringForUser(this.props.match.params.key)
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
  publicationsBringForUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);