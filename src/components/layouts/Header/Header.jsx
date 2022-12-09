import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.logo}>Resume</div>
    <nav>
      <NavLink to='/'>Main</NavLink>
      <NavLink to='/resume'>Resume</NavLink>
    </nav>
  </header>
);

export default Header;
