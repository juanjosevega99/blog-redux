import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

class Users extends Component {

  // async componentDidMount() {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   this.setState({
  //     users: response.data
  //   })
  // }

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
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers
}

export default connect(mapStateToProps, {})(Users);
