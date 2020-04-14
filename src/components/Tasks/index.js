import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as tasksActions from '../../actions/tasksActions'

class Tasks extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.tasks).length) {
      this.props.bringTasks()
    }
  }

  componentDidUpdate() {
    const { tasks, loading, bringTasks } = this.props

    if (!Object.keys(tasks).length && !loading) {
      bringTasks()
    }
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
    const { tasks, changeCheck, deleted } = this.props;
    const for_user = {
      ...tasks[user_id]
    }

    return Object.keys(for_user).map((task_id) => (
      <div key={task_id}>
        <input 
          type="checkbox" 
          defaultChecked={for_user[task_id].completed} 
          onChange={ () => changeCheck(user_id, task_id)}
        />
        {
          for_user[task_id].title
        }
        <button className="m_left"> 
          <Link to={`/tasks/save/${user_id}/${task_id}`}>
            Edit
          </Link>
        </button>
        <button className="m_left" onClick={ () => deleted(task_id) }>
          Delete
        </button>
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