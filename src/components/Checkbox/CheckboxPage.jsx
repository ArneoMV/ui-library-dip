
import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import Table from '../Table/Table';
import Tab from '../Tab/Tab';
import codeJsx from './Code/checkbox_jsx.txt';
import codeScss from './Code/checkbox_scss.txt';
import DividerH from '../Divider/DividerH';
// import Prism from "prismjs";
// import "../../styles/prism.css";


const CheckboxPage = () => {
    
    // Checkbox
    const handleCheckboxChange = (checked) => {
        console.log('Checkbox state changed:', checked);
        // Ovdje možete postaviti logiku za rukovanje promjenom stanja checkboxa
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
    const tabHeaders = [ ' - ', 'JSX', 'SCSS'];
    const tabContent = [
        '.',
        JSXfileContent,
        SCSSfileContent
    ];

    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableConetnt = [
        { cell1: 'label', cell2: 'Tekst koji se prikazuje uz checkbox', cell3: 'string', cell4: '-' },
        { cell1: 'checked', cell2: 'Označava da li je checkbox označen', cell3: 'boolean', cell4: 'false' },
        { cell1: 'onChange', cell2: 'Callback funkcija koja se poziva na promjenu označenosti checkboxa', cell3: 'function', cell4: '-' },
        { cell1: 'disabled', cell2: 'Označava da li je checkbox onemogućen', cell3: 'boolean', cell4: 'false' },
        { cell1: 'error', cell2: '	Označava da li checkbox ima grešku', cell3: 'boolean', cell4: 'false' },
    ];
  
    return (
        <div className="modular-page-structure">
            <article>
                <h2>Checkbox</h2>
                <p>Checkbox koristite kada želite omogućiti korisniku da izabere jednu ili više opcija između dvije ili više mogućnosti.</p>
                <ul>
                    <h4>Kada korisiti checkbox</h4>
                    <li>Potvrđivanje uvjeta ili uslova</li>
                    <li>Filtriranje rezultata</li>
                    <li>ostavke i podešavanja</li>
                </ul>
                <ul>
                    <h4>Kako korisiti checkbox</h4>
                    <li>Kreirajte novu datoteku Checkbox.js i kopirajte kod za Checkbox komponentu u tu datoteku.</li>
                    <li> Smjestite Checkbox.js u odgovarajući direktorij vašeg projekta, obično unutar components direktorija.</li>
                </ul>
            </article>


            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-7-lg">
                        <div className="row">
                        <Checkbox label="Normal" />
                        <Checkbox label="Checked" checked={true} />
                        <Checkbox label="Disabled" disabled />
                        <Checkbox label="Error" error />
                        </div>
                    </div>
                    <DividerH />
                    <div className="padding col-12-lg">
 
                        <div className="code-container">
                            <Tab options={tabHeaders} content={tabContent} />
                        </div>
 
                    </div>
                </div>
            </div>
 
            {/* Table */}
            <Table data={tableConetnt} headers={tableHeaders}/>

        </div>
      );


};

export default CheckboxPage;