import React, { useEffect, useState } from 'react';
import './line.scss';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';

import Line from './Line';

import codeScss from './Code/line_scss.txt';
// import Prism from "prismjs";
// import "../../styles/prism.css";

const LinePage = () => {
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
            <article>
                <h2>Linija</h2>
                <p>Služi kako bi odvojila sadržaj.</p>
                <ul>
                    <h4>Kada korisiti sjenu</h4>
                    <li>Razdvajanje naslova i sadržaja.</li>
                    <li>Razdvajanje poglavlja</li>
                </ul>
                <h3>Vrste</h3>
            </article>

            {/* Primjeri */}
            <div className="example-section column">
                <Line />
            </div>
 
            {/* Table */}
            <Table data={tableContent} headers={tableHeaders}/>
        </div>
    );
};

export default LinePage;