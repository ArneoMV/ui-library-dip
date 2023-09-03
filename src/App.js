import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/scss/index.scss';
import Navigation from './components/Homepage/Navigation.jsx';
import Menu from './components/Homepage/Menu.jsx';
import Pregled from './components/Pregled/Pregled.jsx'; 
// Atoms
import IconPage from './components/Atoms/Icon/IconPage.jsx';
import ColorPage from './components/Atoms/Color/ColorPage.jsx';
import TypographyPage from './components/Atoms/Typography/TypographyPage.jsx';
import ShadowPage from './components/Atoms/Shadow/ShadowPage.jsx';
import LinePage from './components/Atoms/Line/LinePage.jsx';
// Moleculs
import ButtonPage from './components/Molecules/Button/ButtonPage.jsx';
import InputPage from './components/Molecules/Input/InputPage.jsx';
import CheckboxPage from './components/Molecules/Checkbox/CheckboxPage.jsx';
import RadioPage from './components/Molecules/Radio/RadioPage.jsx';
import SelectPage from './components/Molecules/Select/SelectPage.jsx';
import ChipPage from './components/Molecules/Chip/ChipPage.jsx';

// Organism
import AlertPage from './components/Organism/Alert/AlertPage.jsx';
import FormPage from './components/Organism/Form/FormPage.jsx';
import TabPage from './components/Organism/Tab/TabPage.jsx';
import HeaderPage from './components/Organism/Header/HeaderPage.jsx';
import FooterPage from './components/Organism/Footer/FooterPage.jsx';
// Tamplates
import TamplatePage from './components/Tamplate/TamplatePage.jsx';
// Pages
import PagePage from './components/Page/PagePage.jsx';

const App = () => {
  return (
    <Router>
      <div className='body'>
        <Navigation />
        <main>
          <div className='col-2-sm col-2-md col-2-lg'>
            <Menu className='col-2-sm col-2-md col-2-lg'/>
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
              <Route path="/line" element={<LinePage />} />
              <Route path="/chip" element={<ChipPage />} />
              <Route path="/header" element={<HeaderPage />} />
              <Route path="/footer" element={<FooterPage />} />
              <Route path="/tamplate" element={<TamplatePage />} />
              <Route path="/page" element={<PagePage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
