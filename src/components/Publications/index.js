import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Comments from './Comments';

import * as usersActions from '../../actions/usersActions'
import * as publicationsActions from '../../actions/publicationsActions'

const { bringEverything: usersBringEverything } = usersActions
const { 
  bringForUser: publicationsBringForUser, 
  openClose,
  bringComments
} = publicationsActions

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

  addPublications = () => {
    const {
      usersReducer,
      usersReducer: { users },
      publicationsReducer,
      publicationsReducer: { publications },
      match: { params: { key } }
    } = this.props

    if (!users.length) return
    if (usersReducer.error) return

    if (publicationsReducer.loading) {
      return <Spinner />
    }
    if (publicationsReducer.error) {
      return <Fatal message={publicationsReducer.error} />
    }
    if (!publications.length) return;
    if (!('publications_key' in users[key])) return;

    const { publications_key } = users[key]

    return this.showInfo(
      publications[publications_key],
      publications_key
    )
  };
  
  showInfo = (publications, pub_key) => (
    publications.map((publication, com_key) => (
      <div 
        className="pub_title"
        key={ publication.id }
        onClick={ 
          () => this.showComments(pub_key, com_key, publication.comments) 
        }
      >
        <h2>
          { publication.title }
        </h2>
        <h3>
          { publication.body }
        </h3>
        {
          (publication.open) ? <Comments /> : ''
        }
      </div>
    ))
  )

  showComments = (pub_key, com_key, publication.comments) => (
    this.props.openClose(pub_key, com_key)
    this.props.bringComments(pub_key, com_key)
  )

  render() {
    console.log(this.props)
    return (
      <div>
        { this.addUser() }
        { this.addPublications() }
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
  publicationsBringForUser,
  openClose,
  bringComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);