import React from 'react';
import { connect } from 'react-redux';

const Table = (props) => {
  const addRows = () => props.users.map((user) => (
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
          { addRows() }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
}

export default connect(mapStateToProps)(Table);