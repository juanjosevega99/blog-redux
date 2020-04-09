import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main'
import Users from './Users'

const Tasks = () => <div>Tasks</div>

const App = () => (
  <BrowserRouter>
    <Main />
    <Route exact path='/' component={ Users } />
    <Route exact path='/tasks' component={ Tasks } />
  </BrowserRouter>
)

export default App;