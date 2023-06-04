import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/scss/index.scss';

import Navigation from './components/Navigation.jsx';
import Menu from './components/Menu.jsx';
import ButtonPage from './components/pages/ButtonPage.jsx';
import InputPage from './components/pages/InputPage.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <main>
          <div className='col-2-sm col-2-md col-2-lg'>
            <Menu />
          </div>
          <div className='content col-7-sm col-7-md col-7-lg'>
            <Routes>
              <Route path="/button" element={<ButtonPage />} />
              <Route path="/input" element={<InputPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;

