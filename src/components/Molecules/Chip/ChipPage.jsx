import React, { useEffect, useState } from 'react';
import Chip from './Chip';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';
import codeJsx from './Code/chip_jsx.txt';
import { Title, Paragraf } from '../../Atoms/Typography/Typography';

const ShadowPage = () => {
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
        { cell1: '$shadow-sm', cell2: 'Manja sjena koja daje suptilan osjećaj dubine', cell3: 'Box shadow', cell4: '1px 1px 4px 0px rgba(22, 24, 27, 0.16)' },
        { cell1: '$shadow-md', cell2: 'Srednje velika sjena koja nudi umjereni prikaz dubine', cell3: 'Box shadow', cell4: '1px 1px 4px 0px rgba(22, 24, 27, 0.13)' },
        { cell1: '$shadow-lg', cell2: 'Veća sjena koja stvara upečatljivu dimenzionalnost', cell3: 'Box shadow', cell4: '1px 5px 30px 0px rgba(22, 24, 27, 0.1)' },
        { cell1: '$shadow-primary', cell2: 'Posebna sjena s prilagođenim bojama', cell3: 'Box shadow', cell4: '3px 3px 12px 0px rgba(131, 169, 218, 0.4)' },
    ];


    return (
        <div className="modular-page-structure">
            <article className="col-10-lg">
                <Title level={2} color="neutral-700">Oznaka</Title>
                <Paragraf>Na web stranici koja opisuje sjene, mogu se pronaći četiri različite vrste sjena, svaka s vlastitim intenzitetom i bojom, što pruža fleksibilnost u oblikovanju i estetici elemenata na webu. Sjene igraju ključnu ulogu u stvaranju vizualne privlačnosti i hijerarhije među elementima, pridonoseći kohezivnosti i profesionalnosti dizajna. Zadane vrijednosti sjena pružaju nježne prijelaze i umjereni dojam dubine, ali moguće je prilagoditi boje i dimenzije kako bi se dodatno istaknuli određeni elementi u skladu s potrebama dizajna.</Paragraf>
                <Title level={5} color="neutral-700">Kada korisiti oznaku</Title>
                <ul>
                    <li>Kompaktna Prikazivanje Informacija: Oznake su korisne za prikazivanje kratkih informacija, kao što su etikete, kategorije ili ključne riječi, na pregledan način.</li>
                    <li>Organizacija i Klasifikacija: Oznake omogućuju korisnicima da klasificiraju ili organiziraju sadržaj, čime olakšavaju prepoznavanje i praćenje.</li>
                    <li>Brza Interakcija: Klikom na oznaku često se otvara ili pretražuje povezani sadržaj, čime se omogućava brza interakcija i pristup detaljima.</li>
                </ul>
            </article>

            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding row">
                        <Chip text="React" />
                        <Chip text="JavaScript" />
                        <Chip text="SCSS" />
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