import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import styles from './Resume.module.scss';

const Resume = () => (
  <>
    <div className={styles.Resume}>
      <NavLink to='about'>О себе</NavLink>
      <NavLink to='education'>Образование</NavLink>
      <NavLink to='skills'>Навыки</NavLink>
      <NavLink to='experience'>Опыт</NavLink>
    </div>
    <Outlet />
  </>
);

export default Resume;
