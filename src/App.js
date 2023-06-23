import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/scss/index.scss';

import Navigation from './components/Navigation.jsx';
import Menu from './components/Menu.jsx';
import Overview from './components/pages/Overview.jsx';
import ButtonPage from './components/pages/ButtonPage.jsx';
import InputPage from './components/pages/InputPage.jsx';
import CheckboxPage from './components/pages/CheckboxPage.jsx';
import RadiobuttonPage from './components/pages/RadiobuttonPage.jsx';
import SelectPage from './components/pages/SelectPage.jsx';

const App = () => {
  return (
    <Router>
      <div className='body'>
        <Navigation />
        <main>
          <div className='col-2-sm col-2-md col-2-lg'>
            <Menu />
          </div>
          <div className='content col-8-sm col-8-md col-8-lg'>
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/button" element={<ButtonPage />} />
              <Route path="/input" element={<InputPage />} />
              <Route path="/checkbox" element={<CheckboxPage />} />
              <Route path="/radio-button" element={<RadiobuttonPage />} />
              <Route path="/select" element={<SelectPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;

