import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tasksActions from '../../actions/tasksActions'

class Save extends Component {
  changeUserId = (event) => {
    this.props.changeUserId(event.target.value)
  }

  changeTitle = (event) => {
    this.props.changeTitle(event.target.value)
  }
  
  save = () => {
    const { user_id, title, add } = this.props
    const new_task = {
      user_id: user_id,
      title: title,
      completed: false
    };
    add(new_task);
  }

  render() {
    return (
      <div>
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
        >
          Save
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Save);