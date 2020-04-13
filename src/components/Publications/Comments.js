import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../General/Spinner'
import Fatal from '../General/Fatal'

const Comments = (props) => {
  if (props.com_error) {
    return <Fatal message={ props.com_error } />
  }

  if (props.com_loading && !props.comments.length) {
    return <Spinner />
  }

  const addComments = () => (
    props.comments.map((comment) => (
      <li>
        <b>
          <u>
            { comment.email }
          </u>
        </b>
        <br/>
        { comment.body }
      </li>
    ))
  )

  return (
    <ul>
      { addComments() }
    </ul>
  )
}

const mapStateToProps = ({ publicationsReducer }) => publicationsReducer

export default connect(mapStateToProps)(Comments)