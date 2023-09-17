import React, { useEffect, useState, useContext } from 'react';
import Line from '../../Atoms/Line/Line';
import Button from '../../Molecules/Button/Button.jsx';
import Tab from '../../Organism/Tab/Tab';
import Table from '../../Organism/Table/Table';
import AlertContext from "./alert.context";
import Alert from "./Alert.jsx";
import codeJsx from './Code/alert_jsx.txt';
import { Title, Paragraf } from '../../Atoms/Typography/Typography';


const AlertPage = () => {
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
            <article className="col-10-lg">
                <Title level={2} color="neutral-700">Obavijest</Title>
                <Paragraf>Obavijest je komponenta za prikazivanje obavijesti ili poruka korisniku u obliku prekrivajućih prozora. To omogućuje aplikaciji da privremeno prikaže važne informacije korisniku, kao što su upozorenja, potvrde, ili poruke o uspjehu.</Paragraf>
                <Title level={4} color="neutral-700">Kada se koristi:</Title>
                <ul>
                    <li>Važne Informacije: Uzbune se koriste za istaknutje i komunikaciju važnih informacija, kao što su upozorenja, obavijesti ili greške u aplikaciji.</li>
                    <li>Jasnoća i Kontrast: Ovi organi često koriste jake boje i ikone kako bi privukli pažnju korisnika i istaknuli poruku.</li>
                    <li>Brza Reakcija: Uzbune zahtijevaju brzu reakciju korisnika kako bi se suočili s situacijom, primjerice, zatvaranjem obavijesti ili poduzimanjem potrebnih radnji.</li>
                </ul>
                <Title level={4} color="neutral-700">Vrste</Title>
                <Paragraf>Postoje četiri vrste obavijesti, primary, success, warning and error</Paragraf>
            </article>

            {/* Primjeri */}
            <div className="example-section column">

                <div className="column">
                    <div className="padding row">
                        <div className="row">
                            <Button type="link" onClick={handleShowAlertInfo}>Info Alert</Button>
                            <Button type="link" onClick={handleShowAlertSuccess}>Success Alert</Button>
                            <Button type="link" onClick={handleShowAlertWarrning}>Warning Alert</Button>
                            <Button type="link" onClick={handleShowAlertError}>Error Alert</Button>
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
            <Table data={tableContent} headers={tableHeaders}/>
        </div>
    );
};

export default AlertPage;