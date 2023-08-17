import React, { useEffect, useState, useContext } from 'react';
import ColorCard from './ColorCard';
import AlertContext from "../../Organism/Alert/alert.context";
import Alert from "../../Organism/Alert/Alert.jsx";
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';


import codeJsx from './Code/color_jsx.txt';
import codeScss from './Code/color_scss.txt';
import { Title, Paragraf, Button, Caption, Link } from '../Typography/Typography.jsx';
import DividerH from '../Divider/DividerH';


const ColorPage = () => {
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
            <article>
                <h2>Color</h2>
                <p>Osnovni widget za primanje korisničkog unosa je tekstualno polje. Tipkovnica i miš mogu se koristiti za unos ili promjenu podataka.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Potreban je korisnički unos u polje obrasca.</li>
                    <li>Potreban je unos za pretraživanje.</li>
                </ul>
                <h3>Vrste</h3>
                <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            </article>

            {/* Primjeri */}
            <div className="example-section column">

                <div className="column">
                    <div className="padding row">
                        <div className="col col-3-xl">
                            <ColorCard colorName="Primary 100" colorHex="#d8edff" onClick={handleShowAlert} />
                            <ColorCard colorName="Primary 200" colorHex="#D3E9FE" onClick={handleShowAlert} />
                            <ColorCard colorName="Primary 225" colorHex="#c7dfff" onClick={handleShowAlert} />
                            <ColorCard colorName="Primary 250" colorHex="#adcbf4" onClick={handleShowAlert} />
                            <ColorCard colorName="Primary 300" colorHex="#94b9e9" onClick={handleShowAlert} />
                            <ColorCard colorName="Primary 400" colorHex="#83A9DA" onClick={handleShowAlert} />
                            <ColorCard colorName="Primary 500" colorHex="#5688C9" onClick={handleShowAlert} />
                            <ColorCard colorName="Primary 600" colorHex="#275B9D" onClick={handleShowAlert} />  
                        </div>
                        <div className="col col-3-xl">
                            <ColorCard colorName="Warning 100" colorHex="#FAF0CD" onClick={handleShowAlert} />
                            <ColorCard colorName="Warning 200" colorHex="#FFE689" onClick={handleShowAlert} />
                            <ColorCard colorName="Warning 300" colorHex="#FFDE66" onClick={handleShowAlert} />
                            <ColorCard colorName="Warning 400" colorHex="#DAB93E" onClick={handleShowAlert} />
                            <ColorCard colorName="Warning 500" colorHex="#A68A20" onClick={handleShowAlert} />
                        </div>
                        <div className="col col-3-xl">
                            <ColorCard colorName="Success 100" colorHex="#CFF1E9" onClick={handleShowAlert} />
                            <ColorCard colorName="Success 200" colorHex="#86D7C3" onClick={handleShowAlert} />
                            <ColorCard colorName="Success 300" colorHex="#32B695" onClick={handleShowAlert} />
                            <ColorCard colorName="Success 400" colorHex="#1F9577" onClick={handleShowAlert} />
                            <ColorCard colorName="Success 500" colorHex="#0F5F4B" onClick={handleShowAlert} />
                        </div>
                    </div>
                    <div className='padding row'>
                        <div className="col col-3-xl">
                            <ColorCard colorName="Error 100" colorHex="#FEE7E4" onClick={handleShowAlert} />
                            <ColorCard colorName="Error 200" colorHex="#FDAC9F" onClick={handleShowAlert} />
                            <ColorCard colorName="Error 300" colorHex="#F06D57" onClick={handleShowAlert} />
                            <ColorCard colorName="Error 400" colorHex="#D73F28" onClick={handleShowAlert} />
                            <ColorCard colorName="Error 500" colorHex="#A73321" onClick={handleShowAlert} />
                        </div>
                        <div className="col col-3-xl">
                            <ColorCard colorName="Neutral 100" colorHex="#FFFEFE" onClick={handleShowAlert} />
                            <ColorCard colorName="Neutral 200" colorHex="#F8F8F8" onClick={handleShowAlert} />
                            <ColorCard colorName="Neutral 300" colorHex="#EDEDED" onClick={handleShowAlert} />
                            <ColorCard colorName="Neutral 400" colorHex="#D6D6D6" onClick={handleShowAlert} />
                            <ColorCard colorName="Neutral 500" colorHex="#BBBBBB" onClick={handleShowAlert} />
                            <ColorCard colorName="Neutral 600" colorHex="#73777B" onClick={handleShowAlert} />
                            <ColorCard colorName="Neutral 700" colorHex="#2e2d2d" onClick={handleShowAlert} />
                            <ColorCard colorName="Neutral 900" colorHex="#060606" onClick={handleShowAlert} />
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

export default ColorPage;