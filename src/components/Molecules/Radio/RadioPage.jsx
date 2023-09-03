import React, { useEffect, useState } from 'react';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';

import RadioButton from './RadioButton';
import codeJsx from './Code/radio_jsx.txt';

const RadiobuttonPage = () => {
    const [selectedValue, setSelectedValue] = useState('Normal');

    const handleRadioButtonChange = (value) => {
      setSelectedValue(value);
    };

    // Tab component
    const [JSXfileContent, setFileContent] = useState('');

    useEffect(() => {
        fetchTextContent(codeJsx, setFileContent);
    }, []);

    const fetchTextContent = (url, setContent) => {
        fetch(url)
            .then((response) => response.text())
            .then((content) => setContent(content))
            .catch((error) => console.log(error));
    };
    const tabHeaders = [' - ', 'JSX'];
    const tabContent = [
        ' - ',
        JSXfileContent,
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
                <p>Radio Gumb je molekula koja omogućuje korisnicima odabir jedne opcije iz ponuđenog skupa opcija. Radio gumbi se koriste kada je potrebno omogućiti korisnicima ekskluzivan izbor između više opcija.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Ekskluzivan Izbor: Radio gumbi omogućuju korisnicima odabir samo jedne opcije iz ponuđenog skupa, čime se postiže ekskluzivan izbor.</li>
                    <li>Selekcija i Preglednost: Označeni radio gumbi jasno pokazuju korisnički odabir, što povećava preglednost i smanjuje zabunu.</li>
                    <li>Upotreba u Formularima: Radio gumbi često se koriste unutar formulara, anketama i evaluacijama kako bi se prikupili specifični odgovori ili izbori.</li>
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