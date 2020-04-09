import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => (
  <nav id='main'>
    <Link to="/">Users</Link>
    <Link to="/tasks">Tasks</Link>
  </nav>
);

export default Main;