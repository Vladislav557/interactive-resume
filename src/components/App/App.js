import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../../pages/Main';
import Resume from '../../pages/Resume';
import ErrorPage from '../../pages/ErrorPage';
import Skills from '../../components/Skills';
import About from '../About';
import Education from '../Education';
import Experience from '../Experience';

import Layout from '../layouts/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='resume' element={<Resume />}>
            <Route path='about' index element={<About />} />
            <Route path='education' element={<Education />} />
            <Route path='skills' element={<Skills />} />
            <Route path='experience' element={<Experience />} />
          </Route>
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
