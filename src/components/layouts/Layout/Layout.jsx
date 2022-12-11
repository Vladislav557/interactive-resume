import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Box from '../../Box';

import styles from './Layout.module.scss';

const Layout = () => {
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/Vladislav557')
      .then((fetchedData) => fetchedData.json())
      .then((parsedData) => setInfoUser(parsedData));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.content}>
        <Sidebar {...infoUser} />
        <main>
          <Box>
            <Outlet />
          </Box>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
