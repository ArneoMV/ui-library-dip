import React, { useEffect, useState } from 'react';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';

import RadioButton from './RadioButton';
import codeJsx from './Code/radio_jsx.txt';
import codeScss from './Code/radio_scss.txt';
// import Prism from "prismjs";
// import "../../styles/prism.css";

const RadiobuttonPage = () => {
    const [selectedValue, setSelectedValue] = useState('Normal');

    const handleRadioButtonChange = (value) => {
      setSelectedValue(value);
    };


    // Tab component
    const [JSXfileContent, setFileContent] = useState('');
    const [SCSSfileContent, setSecondTabContent] = useState('');

    useEffect(() => {
        fetchTextContent(codeJsx, setFileContent);
        fetchTextContent(codeScss, setSecondTabContent);
    }, []);

    const fetchTextContent = (url, setContent) => {
        fetch(url)
            .then((response) => response.text())
            .then((content) => setContent(content))
            .catch((error) => console.log(error));
    };
    const tabHeaders = [' - ', 'JSX', 'SCSS'];
    const tabContent = [
        ' - ',
        JSXfileContent,
        SCSSfileContent,
    ];

    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableContent = [
        { cell1: 'label', cell2: 'Label for the input field', cell3: 'string', cell4: '-' },
        { cell1: 'placeholder', cell2: 'Placeholder text for the input field', cell3: 'string', cell4: '-' },
        { cell1: 'type', cell2: 'Type of the input field', cell3: 'string', cell4: 'text' },
        { cell1: 'success', cell2: 'Indicates a successful input', cell3: 'bool', cell4: 'false' },
        { cell1: 'error', cell2: 'Error message for invalid input', cell3: 'string', cell4: '-' },
        { cell1: 'disabled', cell2: 'Disables the input field', cell3: 'bool', cell4: 'false' },
    ];
  
    return (
        <div className="modular-page-structure">
            <article>
                <h2>Radio</h2>
                <p>Olakšavaju prebacivanje između različitih prikaza. Tab komponentu možete koristiti unutar vaše React aplikacije, posebno ako želite organizirati sadržaj na više tabova. Može se koristiti na različitim stranicama, modulima ili dijelovima aplikacije gdje je potrebno prikazati više sadržaja grupiranih u tabove.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Koristi se za odabir jednog stanja iz više opcija.</li>
                    <li>Razlika od Selecta je što je Radio vidljiv korisniku i može olakšati usporedbu izbora, što znači da ih ne bi trebalo biti previše.</li>
                </ul>
            </article>

            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="column">
                        <RadioButton
                            label="Normal"
                            checked={selectedValue === 'Normal'}
                            onChange={handleRadioButtonChange}
                        />
                        <RadioButton
                            label="Checked"
                            checked={selectedValue === 'Checked'}
                            onChange={handleRadioButtonChange}
                        />
                        <RadioButton
                            label="Disabled"
                            checked={selectedValue === 'Disabled'}
                            onChange={handleRadioButtonChange}
                        />
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="padding col-12-lg">
 
                        <div className="code-container">
                            <Tab options={tabHeaders} content={tabContent} />
                        </div>
 
                    </div>
                </div>
            </div>
 
            {/* Table */}
            <Table data={tableContent} headers={tableHeaders}/>
        </div>
      );


};

export default RadiobuttonPage;