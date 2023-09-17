import React, { useEffect, useState } from 'react';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';
import Input from './Input';
import codeJsx from './Code/input_jsx.txt';
import { Title, Paragraf } from '../../Atoms/Typography/Typography';


const InputPage = () => {
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
        '-',
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
        <div className="page-structure">
            <article className="col-10-lg">
                <Title level={2} color="neutral-700">Polje za unos</Title>
                <Paragraf>Polje za unos je molekula koja omogućuje korisnicima unos teksta ili podataka unutar sučelja. Polja za unos su neizostavni elementi interaktivnih formulara i dijaloga.</Paragraf>
                <Title level={4} color="neutral-700">Kada se koristi:</Title>
                <ul>
                    <li>Unos Podataka: Polja za unos omogućuju korisnicima da unesu tekst, brojeve ili druge podatke, čime se omogućava interakcija s aplikacijom ili web stranicom.</li>
                    <li>Validacija i Povratne Informacije: Unosni elementi često uključuju validaciju unesenih podataka i pružaju povratne informacije korisnicima o ispravnosti unosa.</li>
                    <li>Raznolikost Upotrebe: Polja za unos koriste se u različitim kontekstima, od pretrage i prijave do slanja poruka i komentiranja sadržaja.</li>
                </ul>
                <h3>Vrste</h3>
                <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            </article>

            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="col">
                        <Input label="Normal Input" placeholder="Enter text" type="text" />
                        <Input label="success Input" placeholder="Enter password" success />
                        <Input label="Error Input" placeholder="Enter password" error="Invalid input" />
                        <Input label="Disabled Input" placeholder="Enter text" disabled />
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

export default InputPage;