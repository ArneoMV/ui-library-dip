import React, { useEffect, useState } from 'react';
import Tab from '../system/Tab';
import Table from '../system/Table';
import tab_jsx from '../system/tab/tab_jsx.txt';
import tab_scss from '../system/tab/tab_scss.txt';
 
const TabPage = () => {
    const [fileContent, setFileContent] = useState('');
    const [secondTabContent, setSecondTabContent] = useState('');
 
    useEffect(() => {
        fetchTextContent(tab_jsx, setFileContent);
        fetchTextContent(tab_scss, setSecondTabContent);
    }, []);
 
    const fetchTextContent = (url, setContent) => {
        fetch(url)
          .then((response) => response.text())
          .then((content) => setContent(content))
          .catch((error) => console.log(error));
    };
 
    // const handleTabClick = (tabIndex) => {
    //     if (tabIndex === 1 && !secondTabContent) {
    //         fetchTextContent('./system/tab/tab_scss.txt', setSecondTabContent);
    //     }
    // };
 
    const tableData = [
        { cell1: 'type', cell2: 'Vrsta tipke', cell3: 'string', cell4: 'default' },
        { cell1: 'children', cell2: 'Sadržaj unutar tipke', cell3: 'node', cell4: '-' },
        { cell1: 'disabled', cell2: 'Zastavica za onemogućavanje tipke', cell3: 'bool', cell4: 'false' },
    ];
    const options_1 = ['JSX', 'SCSS', 'Copy'];
    const options_2 = ['JSX', 'SCSS', 'Copy'];
    const tabContent = [
        fileContent,
        secondTabContent,
        'Ovo je sadržaj Tab 3'
    ];
 
    return (
        <div className="modular-page-structure">
            <h2>Tab</h2>
            <p>Komponenta obrasca visokih performansi s upravljanjem opsegom podataka. Uključujući prikupljanje podataka, provjeru i stilove.</p>
            <ul>
                <h4>Kada korisiti tab koristiti</h4>
                <li>Kada trebate stvoriti instancu ili prikupiti informacije.</li>
                <li>Kada trebate potvrditi polja u određenim pravilima.</li>
            </ul>
            <h3>Kada korisiti formu</h3>
 
            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="column">
                            <Tab options={options_1} />
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="padding col-12-lg">
 
                        <div className="code-container">
                            <Tab options={options_2} content={tabContent} />
                        </div>
 
                    </div>
                </div>
 
 
            </div>
 
            {/* Table */}
            <Table data={tableData} />
        </div>
    );
};
 
export default TabPage;