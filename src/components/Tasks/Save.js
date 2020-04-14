import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import { Redirect } from 'react-router-dom';

import * as tasksActions from '../../actions/tasksActions'

class Save extends Component {
  componentDidMount() {
    const {
      match: { params: { use_id, tas_id } },
      tasks,
      changeUserId,
      changeTitle,
      cleanForma
    } = this.props;

    if (use_id && tas_id) {
      const task = tasks[use_id][tas_id];
      changeUserId(task.userId)
      changeTitle(task.title)
    }
    else {
      cleanForma()
    }
  }

  changeUserId = (event) => {
    this.props.changeUserId(event.target.value)
  }

  changeTitle = (event) => {
    this.props.changeTitle(event.target.value)
  }
  
  save = () => {
    const { 
      match: { params: { use_id, tas_id } },
      tasks,
      user_id, 
      title, 
      add,
      edit
    } = this.props

    const new_task = {
      user_id: user_id,
      title: title,
      completed: false
    };

    if (use_id, tas_id) {
      const task = tasks[use_id][tas_id];
      const task_edited = {
        ...new_task,
        completed: task.completed,
        id: task.id
      }
      edit(task_edited)
    }
    else {
      add(new_task);
    }
  }

  disable = () => {
    const { user_id, title, loading } = this.props;

    if (loading) {
      return true;
    }
    if (!user_id || !title) {
      return true;
    }

    return false;
  };

  showAction = () => {
    const { error, loading } = this.props
    if (loading) {
      return <Spinner />
    }
    if (error) {
      return <Fatal message={error} />
    }
  }

  render() {
    return (
      <div>
        {
          (this.props.back) ? <Redirect to='/tasks' /> : ''
        }
        <h1>
          Save task
        </h1>
        User id:
        <input
          type="number"
          value={ this.props.user_id }
          onChange={ this.changeUserId}
        />
        <br/><br/>
        Title:
        <input 
          value={ this.props.title }
          onChange={ this.changeTitle }
        />
        <br/><br/>
        <button
          onClick={ this.save }
          disabled={ this.disable()}
        >
          Save
        </button>
        { this.showAction() }
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Save);