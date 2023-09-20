import React, { useEffect, useState, useContext } from 'react';
import ColorCard from './ColorCard';
import AlertContext from "../../Organism/Alert/alert.context";
import Alert from "../../Organism/Alert/Alert.jsx";
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';
import { Title, Paragraf } from '../Typography/Typography';


import codeJsx from './Code/color_jsx.txt';
import Line from '../Line/Line';


const ColorPage = () => {
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

    // Alert
    const { showAlert } = useContext(AlertContext);
    const handleShowAlert = (colorName, colorHex) => {
        showAlert(`@${colorName} copied: ${colorHex}`, "success");
        
    };

    return (
        <div className="modular-page-structure color-page">
            <Alert />
            <article className="col-10-lg">
                <Title level={2} color="neutral-700">Boja</Title>
                <Paragraf>Boja je osnovna komponenta dizajna koja igra ključnu ulogu u definiranju estetike i komunikaciji u svijetu IT-a. Boje dodaju dubinu, emocionalnu vrijednost i kontrast sučeljima, potičući korisnike na određene akcije i pružajući prepoznatljivost.</Paragraf>
                <Title level={5} color="neutral-700">Kada korisiti boje:</Title>
                <ul>
                    <li>Boja je od vitalnog značaja za identitet marke i njezin prepoznatljiv izgled. Primjerice, karakteristična boja može brzo asocirati korisnike s određenom tvrtkom ili proizvodom.</li>
                    <li>Boje se koriste kako bi se postigao kontrast između teksta i pozadine, osiguravajući da su informacije lako čitljive i pristupačne.</li>
                    <li>Različite boje izražavaju različite emocije i osjećaje. Na primjer, crvena može simbolizirati hitnost, dok plava sugerira smirenost.</li>
                </ul>
                <Title level={5} color="neutral-700">Vrste boja:</Title>
                <Paragraf>Primary, secondary i gradient</Paragraf>
            </article>

            {/* Primjeri */}
            <div className="example-section column">

                <div className="column">
                    <div className="padding row">
                        <div className="col col-3-xl">
                            <ColorCard colorName="Primary 100" colorHex="#F0F9FF" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Primary 200" colorHex="#E4F2FF" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Primary 300" colorHex="#CEE3FF" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Primary 400" colorHex="#9EC7FE" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Primary 500" colorHex="#70AEFF" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Primary 600" colorHex="#518DDB" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Primary 700" colorHex="#2E69B6" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Primary 800" colorHex="#144789" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Primary 900" colorHex="#0C3262" onClick={handleShowAlert} className="txt-white"/>
                        </div>
                        <div className="col col-3-xl">
                            <ColorCard colorName="Neutral 100" colorHex="#FFFEFE" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Neutral 200" colorHex="#F9F9F9" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Neutral 300" colorHex="#F3F3F3" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Neutral 400" colorHex="#E3E3E3" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Neutral 500" colorHex="#A2A2A2" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Neutral 600" colorHex="#7F7F7F" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Neutral 700" colorHex="#454545" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Neutral 800" colorHex="#242424" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Neutral 900" colorHex="#0C0C0C" onClick={handleShowAlert} className="txt-white"/>
                        </div>
                    </div>
                    <div className="padding row">
                        <div className="col col-3-xl">
                            <ColorCard colorName="Warning 100" colorHex="#FAF0CD" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Warning 200" colorHex="#FFE689" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Warning 300" colorHex="#FFDE66" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Warning 400" colorHex="#DAB93E" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Warning 500" colorHex="#A68A20" onClick={handleShowAlert} className="txt-white"/>
                        </div>
                        <div className="col col-3-xl">
                            <ColorCard colorName="Success 100" colorHex="#CFF1E9" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Success 200" colorHex="#86D7C3" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Success 300" colorHex="#32B695" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Success 400" colorHex="#1F9577" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Success 500" colorHex="#0F5F4B" onClick={handleShowAlert} className="txt-white"/>
                        </div>
                        <div className="col col-3-xl">
                            <ColorCard colorName="Error 100" colorHex="#FEE7E4" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Error 200" colorHex="#FDAC9F" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Error 300" colorHex="#F06D57" onClick={handleShowAlert} className="txt-black"/>
                            <ColorCard colorName="Error 400" colorHex="#D73F28" onClick={handleShowAlert} className="txt-white"/>
                            <ColorCard colorName="Error 500" colorHex="#A73321" onClick={handleShowAlert} className="txt-white"/>
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

export default ColorPage;