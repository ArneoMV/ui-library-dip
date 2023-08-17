import React, { useEffect, useState, useContext } from 'react';


import DividerH from '../../Atoms/Divider/DividerH';
import Button from '../../Molecules/Button/Button.jsx';
import Tab from '../../Organism/Tab/Tab';
import Table from '../../Organism/Table/Table';


import AlertContext from "./alert.context";
import Alert from "./Alert.jsx";
import codeJsx from './Code/alert_jsx.txt';
import codeScss from './Code/alert_scss.txt';



const AlertPage = () => {
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
    const tabHeaders = [' - ', 'JSX', 'SCSS'];
    const tabContent = [
        '-',
        JSXfileContent,
        SCSSfileContent,
    ];

    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableContent = [
        { cell1: 'text', cell2: 'Tekst obavijesti koji se prikazuje korisniku', cell3: 'string', cell4: '-' },
        { cell1: 'type', cell2: 'Vrsta obavijesti (info, success, warning, error)', cell3: 'string', cell4: 'info' },
        { cell1: 'timeout', cell2: 'Vrijeme (u milisekundama) koliko će obavijest ostati prikazana', cell3: 'number', cell4: '5000' },
    ];

    // Alert
    const { showAlert } = useContext(AlertContext);

    const handleShowAlertInfo = () => {
        showAlert("This is an info alert!", "info");
    };
    const handleShowAlertSuccess = () => {
        showAlert("This is an success alert!", "success");
    };
    const handleShowAlertWarrning = () => {
        showAlert("This is an warning alert!", "warning");
    };
    const handleShowAlertError = () => {
        showAlert("This is an error alert!", "error");
    };

    return (
        <div className="modular-page-structure color-page">
            <Alert />
            <article>
                <h2>Alert</h2>
                <p>Alert je komponenta za prikazivanje obavijesti ili poruka korisniku u obliku prekrivajućih prozora. To omogućuje aplikaciji da privremeno prikaže važne informacije korisniku, kao što su upozorenja, potvrde, ili poruke o uspjehu.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <p>Alert se koristi u situacijama kada aplikacija treba obavijestiti korisnika o određenom događaju, stanju ili potrebi za akcijom. Neki primjeri kada se Alert može koristiti su:</p>
                    <li>Pri potvrdi akcije koja može imati dugotrajan ili nepovratan učinak.</li>
                    <li>Kada je potrebno prikazati poruku o grešci ili upozorenje korisniku.</li>
                    <li>Pri potvrdi uspješno završene akcije ili transakcije.</li>
                </ul>
                <h3>Vrste</h3>
                <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            </article>

            {/* Primjeri */}
            <div className="example-section column">

                <div className="column">
                    <div className="padding row">
                        <div className="row">
                            <Button type="primary" onClick={handleShowAlertInfo}>Info Alert</Button>
                            <Button type="primary" onClick={handleShowAlertSuccess}>Success Alert</Button>
                            <Button type="primary" onClick={handleShowAlertWarrning}>Warning Alert</Button>
                            <Button type="primary" onClick={handleShowAlertError}>Error Alert</Button>
                        </div>

                    </div>

                    <DividerH />
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

export default AlertPage;