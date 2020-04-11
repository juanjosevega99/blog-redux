import React, { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from '../General/Spinner'

import * as usersActions from '../../actions/usersActions'

class Users extends Component {

  componentDidMount() {
    this.props.bringEverything()
  }

  addContent = () => {
    if (this.props.loading) {
      return <Spinner />
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          { this.addRows() }
        </tbody>
      </table>
    )
  }

  addRows = () => (
    this.props.users.map((user) => (
      <tr key={ user.id }>
        <td>
          { user.name }
        </td>
        <td>
          { user.email }
        </td>
        <td>
          { user.website }
        </td>
      </tr>
    ))
  )

  render() {
    return (
      <div>
        { this.addContent() }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers
}

export default connect(mapStateToProps, usersActions)(Users);
