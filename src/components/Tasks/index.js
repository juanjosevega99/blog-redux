import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as tasksActions from '../../actions/tasksActions'

class Tasks extends Component {
  componentDidMount() {
    this.props.bringTasks()
  }

  showContent = () => {
    const { tasks, loading, error } = this.props

    if (loading) {
      return <Spinner />
    }
    
    if (error) {
      return <Fatal message={error} />
    }

    return Object.keys(tasks).map((user_id) => (
      <div key={user_id}>
        <h2>
          User {user_id}
        </h2>
        <div className='content_tasks'>
          { this.addTasks(user_id) }
        </div>
      </div>
    ))
  }

  addTasks = (user_id) => {
    const { tasks } = this.props;
    const for_user = {
      ...tasks[user_id]
    }

    return Object.keys(for_user).map((task_id) => (
      <div key={task_id}>
        <input type="checkbox" defaultChecked={for_user[task_id].completed} />
        {
          for_user[task_id].title
        }
      </div>
    ))
  }

  render() {
    return (
      <div>
        <button>
          <Link to='/tasks/save'>
            Add
          </Link>
        </button>
        { this.showContent() }
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Tasks);