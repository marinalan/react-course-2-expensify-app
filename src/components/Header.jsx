import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>&nbsp;
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>&nbsp;
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>&nbsp;
    </nav>
  </header>
);

export default Header;