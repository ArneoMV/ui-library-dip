import React, { useEffect, useState } from 'react';
import Line from '../../Atoms/Line/Line';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';
import Checkbox from './Checkbox';
import codeJsx from './Code/checkbox_jsx.txt';
import { Title, Paragraf } from '../../Atoms/Typography/Typography';

const CheckboxPage = () => {
    
    // Checkbox
    const handleCheckboxChange = (checked) => {
        console.log('Checkbox state changed:', checked);
        // Ovdje možete postaviti logiku za rukovanje promjenom stanja checkboxa
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
    const tabHeaders = [ ' - ', 'JSX'];
    const tabContent = [
        '.',
        JSXfileContent,
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
            <article className="col-10-lg">
                <Title level={2} color="neutral-700">Potvrdni okvir</Title>
                <Paragraf>Potvrdni okvir (Checkbox) je molekula koja omogućuje korisnicima odabir više opcija među ponuđenim izborima. Potvrdni okviri koriste se za označavanje ili poništavanje određenih opcija.</Paragraf>
                <Title level={5} color="neutral-700">Kada korisiti:</Title>
                <ul>
                    <li>Višestruki Izbor: Potvrdni okviri omogućuju korisnicima jednostavan i istovremeni izbor više opcija iz skupa ponuđenih.</li>
                    <li>Potvrda i Selekcija: Označeni potvrdni okviri potvrđuju korisničke odabire, pružajući povratne informacije o izborima.</li>
                    <li>Filtriranje i Prilagodba: Potvrdni okviri su korisni u filtriranju i prilagodbi prikaza sadržaja, kao što su opcije sortiranja ili filtriranja rezultata pretrage.</li>
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
                    <Line />
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