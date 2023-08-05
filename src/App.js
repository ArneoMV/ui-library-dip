import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/scss/index.scss';

import Navigation from './components/Homepage/Navigation.jsx';
import Menu from './components/Homepage/Menu.jsx';
import Pregled from './components/Pregled/Pregled.jsx'; 
import ButtonPage from './components/Button/ButtonPage.jsx';
import InputPage from './components/Input/InputPage.jsx';
import CheckboxPage from './components/Checkbox/CheckboxPage.jsx';
import RadioPage from './components/Radio/RadioPage.jsx';
import SelectPage from './components/Select/SelectPage.jsx';
import FormPage from './components/Form/FormPage.jsx';
import TabPage from './components/Tab/TabPage.jsx';
import IconPage from './components/Icon/IconPage.jsx';
import ColorPage from './components/Color/ColorPage.jsx';
import TypographyPage from './components/Typography/TypographyPage.jsx';
import ShadowPage from './components/Shadow/ShadowPage.jsx';
import AlertPage from './components/Alert/AlertPage.jsx';

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
              {/* Uklonite element atribut */}
              <Route path="/" />
              {/* Dodajte Route koji će sadržavati element atribut */}
              <Route path="/ui-librery-dip" element={<Pregled />} />
              <Route path="/pregled" element={<Pregled />} />
              {/* Dodatne rute */}
              <Route path="/button" element={<ButtonPage />} />
              <Route path="/input" element={<InputPage />} />
              <Route path="/checkbox" element={<CheckboxPage />} />
              <Route path="/radio" element={<RadioPage />} />
              <Route path="/select" element={<SelectPage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/tab" element={<TabPage />} />
              <Route path="/icon" element={<IconPage />} />
              <Route path="/color" element={<ColorPage />} />
              <Route path="/typography" element={<TypographyPage />} />
              <Route path="/shadow" element={<ShadowPage />} />
              <Route path="/alert" element={<AlertPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
