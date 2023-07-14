import React, { useEffect, useState } from 'react';
import Table from '../system/Table';
import Tab from '../system/Tab';
import tab_jsx from './tab/tab_jsx.txt';
import tab_scss from './tab/tab_scss.txt';
 
const TabPage = () => {
    const [JSXfileContent, setFileContent] = useState('');
    const [SCSSfileContent, setSecondTabContent] = useState('');
 
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
 
    
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableConent = [
        { cell1: 'options', cell2: 'Popis opcija tabova koje će se prikazati', cell3: 'array', cell4: 'options_2' },
        { cell1: 'content', cell2: 'Popis sadržaja koji će se prikazati za svaki tab', cell3: 'array', cell4: 'tabContent' },
    ];
    const tabHeaders_1 = ['Tab 1', 'Tab 2', 'Tab 3'];
    const tabHeaders_2 = ['JSX', 'SCSS', 'Copy'];
    const tabContent_2 = [
        JSXfileContent,
        SCSSfileContent,
        'Ovo je sadržaj Tab 3'
    ];
    const tabContent_1 = [
        'Tab 1',
        'Tab 2',
        'Tab 3'
    ];
 
    return (
        <div className="modular-page-structure">
            <article>
                <h2>Tab</h2>
                <p>Olakšavaju prebacivanje između različitih prikaza. Tab komponentu možete koristiti unutar vaše React aplikacije, posebno ako želite organizirati sadržaj na više tabova. Može se koristiti na različitim stranicama, modulima ili dijelovima aplikacije gdje je potrebno prikazati više sadržaja grupiranih u tabove.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Kada želite prikazati više tabova s različitim sadržajem</li>
                </ul>
            </article>
 
            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="column">
                            <Tab options={tabHeaders_1} content={tabContent_1}/>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="padding col-12-lg">
 
                        <div className="code-container">
                            <Tab options={tabHeaders_2} content={tabContent_2} />
                        </div>
 
                    </div>
                </div>
            </div>
 
            {/* Table */}
            <Table data={tableConent} headers={tableHeaders}/>
        </div>
    );
};
 
export default TabPage;