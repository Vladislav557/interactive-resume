import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Box from '../../Box';

import styles from './Layout.module.scss';

const Layout = () => (
  <>
    <Header />
    <div className={styles.content}>
      <Sidebar />
      <main>
        <Box>
          <Outlet />
        </Box>
      </main>
    </div>
    <Footer />
  </>
);

export default Layout;
