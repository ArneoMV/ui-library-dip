import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import CheckboxHover from './CheckboxHover';
import CheckboxActive from './CheckboxActive';
import CheckboxDisabled from './CheckboxDisabled';
import Table from '../Table/Table';
import Tab from '../Tab/Tab';
import codeJsx from './Code/checkbox_jsx.txt';
import codeScss from './Code/checkbox_scss.txt';
// import Prism from "prismjs";
// import "../../styles/prism.css";


const CheckboxPage = () => {

    // Checkbox component
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
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
    const tabHeaders = ['JSX', 'SCSS', ' - '];
    const tabContent = [
        JSXfileContent,
        SCSSfileContent,
        '-'
    ];

    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableConetnt = [
        { cell1: 'label', cell2: 'Label for the checkbox', cell3: 'string', cell4: '-' },
        { cell1: 'checked', cell2: 'Indicates whether checkbox is checked', cell3: 'boolean', cell4: 'false' },
        { cell1: 'onChange', cell2: 'Callback function for checkbox change', cell3: 'function', cell4: '-' },
        { cell1: 'disabled', cell2: 'Disables the checkbox', cell3: 'boolean', cell4: 'false' },
    ];
  
    return (
        <div className="page-structure">
            <article>
                <h2>Checkbox</h2>
                <p>Komponenta potvrdnog okvira</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Koristi se za odabir više vrijednosti iz nekoliko opcija.</li>
                    <li>Ako koristite samo jedan potvrdni okvir, to je isto kao da koristite Switch za prebacivanje između dva stanja. Razlika je u tome što će Switch izravno pokrenuti promjenu stanja, ali potvrdni okvir samo označava stanje kao promijenjeno i to je potrebno poslati.</li>
                </ul>
            </article>


            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="row">
                        <Checkbox
                            label="Normal"
                        />
                         <CheckboxHover
                            label="Hover"
                        />
                        <CheckboxActive
                            label="Active"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                         <CheckboxDisabled
                            label="Disabled"
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
            <Table data={tableConetnt} headers={tableHeaders}/>

        </div>
      );


};

export default CheckboxPage;