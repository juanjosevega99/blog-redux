import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as usersActions from '../../actions/usersActions'
import * as publicationsActions from '../../actions/publicationsActions'

const { bringEverything: usersBringEverything } = usersActions
const { bringForUser: publicationsBringForUser } = publicationsActions

class Publications extends Component {
  async componentDidMount() {
    const {
      usersBringEverything,
      publicationsBringForUser,
      match: { params: { key } }
    } = this.props

    if (!this.props.usersReducer.users.length) {
      await usersBringEverything()
    }
    if (this.props.usersReducer.error) {
      return;
    }
    if (!('publications_key' in this.props.usersReducer.users[key])) {
      publicationsBringForUser(key)
    }
  }

  addUser = () => {
    const {
      usersReducer,
      match: { params: { key } }
    } = this.props;

    if (usersReducer.error) {
      return <Fatal message={ usersReducer.error } />
    }

    if (!usersReducer.users.length || usersReducer.loading) {
      return <Spinner />
    }

    const name = usersReducer.users[key].name;
    
    return (
      <h1>
        Publications of { name }
      </h1>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.props.match.params.key }
        { this.addUser() }
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