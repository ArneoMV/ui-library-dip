import React, { useEffect, useState } from 'react';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';

import Icon from './Icon';
import codeJsx from './Code/icon_jsx.txt';
import codeScss from './Code/icon_scss.txt';
// import Prism from "prismjs";
// import "../../styles/prism.css";

const IconPage = () => {
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
                <h2>Icon</h2>
                <p>Osnovni widget za primanje korisničkog unosa je tekstualno polje. Tipkovnica i miš mogu se koristiti za unos ili promjenu podataka.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Potreban je korisnički unos u polje obrasca.</li>
                    <li>Potreban je unos za pretraživanje.</li>
                </ul>
                <h3>Vrste</h3>
                <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            </article>

            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="col">
                            <Icon></Icon>
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

export default IconPage;