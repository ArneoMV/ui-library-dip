import React, { useEffect, useState } from 'react';
import './line.scss';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';
import Line from './Line';
import codeScss from './Code/line_scss.txt';
import { Title, Paragraf } from '../Typography/Typography';

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
            <article className="col-10-lg">
                
                <Title level={2} color="neutral-700">Linija</Title>
                <Paragraf>Linija je jednostavan vizualni element koji se koristi za odvajanje, povezivanje ili definiranje različitih dijelova sučelja. Linije pružaju strukturu i jasnoću, čineći sučelje organiziranim i lako razumljivim.</Paragraf>
                <Title level={5} color="neutral-700">Kada korisiti linije:</Title>
                <ul>
                    <li>Linije se često koriste za fizičko razdvajanje različitih sekcija na web stranici ili za grupiranje sličnih elemenata, čime se olakšava navigacija korisnicima.</li>
                    <li>Linije se koriste kako bi se usmjerila pažnja korisnika na određene dijelove sučelja, poput naslova, tablica ili odjeljaka s posebnim informacijama.</li>
                </ul>
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