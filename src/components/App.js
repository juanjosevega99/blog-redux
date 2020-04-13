import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main'
import Users from './Users'
import Publications from './Publications'
import Tasks from './Tasks'

const App = () => (
  <BrowserRouter>
    <Main />
    <div className="margin">
      <Route exact path='/' component={ Users } />
      <Route exact path='/tasks' component={ Tasks } />
      <Route exact path='/publications/:key' component={ Publications } />
    </div>
  </BrowserRouter>
)

export default App;