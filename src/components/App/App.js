import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../../pages/Main';
import Resume from '../../pages/Resume';
import ErrorPage from '../../pages/ErrorPage';

import Layout from '../layouts/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='resume' element={<Resume />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
