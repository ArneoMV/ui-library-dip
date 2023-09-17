import React, { useEffect, useState } from 'react';
import './shadow.scss';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';

import codeScss from './Code/shadow_scss.txt';
import { Title, Paragraf } from '../Typography/Typography';

const ShadowPage = () => {
    // Tab component
    const [SCSSfileContent, setSecondTabContent] = useState('');

    useEffect(() => {
        fetchTextContent(codeScss, setSecondTabContent);
    }, []);

    const fetchTextContent = (url, setContent) => {
        fetch(url)
            .then((response) => response.text())
            .then((content) => setContent(content))
            .catch((error) => console.log(error));
    };
    const tabHeaders = ['SCSS', ' - '];
    const tabContent = [
        SCSSfileContent,
        '-'
    ];

    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableContent = [
        { cell1: '$shadow-sm', cell2: 'Manja sjena koja daje suptilan osjećaj dubine', cell3: 'Box shadow', cell4: '1px 1px 4px 0px rgba(22, 24, 27, 0.16)' },
        { cell1: '$shadow-md', cell2: 'Srednje velika sjena koja nudi umjereni prikaz dubine', cell3: 'Box shadow', cell4: '1px 1px 4px 0px rgba(22, 24, 27, 0.13)' },
        { cell1: '$shadow-lg', cell2: 'Veća sjena koja stvara upečatljivu dimenzionalnost', cell3: 'Box shadow', cell4: '1px 5px 30px 0px rgba(22, 24, 27, 0.1)' },
        { cell1: '$shadow-primary', cell2: 'Posebna sjena s prilagođenim bojama', cell3: 'Box shadow', cell4: '3px 3px 12px 0px rgba(131, 169, 218, 0.4)' },
    ];


    return (
        <div className="modular-page-structure">
            <article className="col-10-lg">
                <Title level={2} color="neutral-700">Sjena</Title>
                <Paragraf>Sjena je vizualni efekt koji dodaje dubinu i dimenzionalnost elementima sučelja, pružajući iluziju trodimenzionalnosti. Sjena igra ključnu ulogu u usmjeravanju pažnje na određene dijelove sučelja i poboljšava opću estetiku.</Paragraf>
                <Title level={4} color="neutral-700">Kada korisiti sjenu:</Title>
                <ul>
                    <li>Sjena se često koristi kako bi naglasila aktivne elemente, poput gumba, kada ih korisnici prelaze mišem ili ih odabiru.</li>
                    <li>Korištenjem različitih razina sjene može se postići osjećaj dubine na stranici, što pomaže u uspostavljanju hijerarhije između različitih elemenata.</li>
                    <li>Sjena se također koristi radi poboljšanja općeg izgleda sučelja, čineći ga privlačnijim i suvremenijim.</li>
                </ul>
                <Title level={4} color="neutral-700">Vrste sjene:</Title>
                <Paragraf>Small, Medium, Large i Primary</Paragraf>
            </article>

            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding row">
                        <div className='shadow shadow-sm'></div>
                        <div className='shadow shadow-md'></div>
                        <div className='shadow shadow-lg'></div>
                        <div className='shadow shadow-primary'></div>
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

export default ShadowPage;