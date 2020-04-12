import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Table = (props) => {
  const addRows = () => props.users.map((user, key) => (
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
      <td>
        <Link to={ `/publications/${key}` }>
          <div className="eye-solid icon"></div>
        </Link>
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
  return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);