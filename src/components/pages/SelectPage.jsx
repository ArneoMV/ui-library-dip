import React, { useEffect, useState } from 'react';
import Select from '../system/Select';
import Table from '../system/Table';
import Prism from "prismjs";
import "../../styles/prism.css";
import Tab from '../system/Tab';
import codeJsx from './codeExamples/select/select_jsx.txt';
import codeScss from './codeExamples/select/select_scss.txt';
 

const SelectPage = () => {
  // Select component
  const options_1 = [
    { label: 'Placeholder 1' },
    { label: 'Placeholder 2' },
    { label: 'Placeholder 3' },
  ];
  const options_2 = [
    { label: 'Placeholder 4' },
    { label: 'Placeholder 5' },
    { label: 'Placeholder 6' },
  ];

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleOpen1 = () => setIsOpen1((prevState) => !prevState);
  const toggleOpen2 = () => setIsOpen2((prevState) => !prevState);

  const handleOptionSelect1 = (selectedOption) => {
    console.log('Default:', selectedOption);
  };

  const handleOptionSelect2 = (selectedOption) => {
    console.log('Checkbox:', selectedOption);
  };


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
    const tabHeaders = ['JSX', 'SCSS', ' - '];
    const tabContent = [
        JSXfileContent,
        SCSSfileContent,
        '-'
    ];
    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableContent = [
        { cell1: 'title', cell2: 'Funkcija za obradu odabira', cell3: 'string', cell4: 'Default' },
        { cell1: 'type', cell2: 'Vrsta select komponente', cell3: 'string', cell4: 'Default' },
        { cell1: 'options', cell2: 'Opcije za select', cell3: 'array', cell4: 'options_1' },
        { cell1: 'selectNumber', cell2: 'Broj odabira selecta', cell3: 'number', cell4: '1' },
        { cell1: 'isOpen', cell2: 'Zastavica za kontrolu stanja otvorenosti', cell3: 'bool', cell4: 'isOpen1' },
        { cell1: 'toggleOpen', cell2: 'Funkcija za prebacivanje stanja otvorenosti', cell3: 'func', cell4: 'toggleOpen1' },
        { cell1: 'onSelect', cell2: '	Funkcija za obradu odabira', cell3: 'func', cell4: 'handleOptionSelect1' },
        
    ];
  
    return (
        <div className="modular-page-structure">
          <article>
            <h2>Select</h2>
            <p>Odaberite komponentu za odabir vrijednosti iz opcija.</p>
            <h3>Kada ga koristiti</h3>
            <ul>
              <li>Koristi se za odabir jednog stanja iz više opcija.</li>
              <li>Razlika od Selecta je što je Radio vidljiv korisniku i može olakšati usporedbu izbora, što znači da ih ne bi trebalo biti previše.</li>
            </ul>
          </article>
             {/* Primjeri */}
            <div className="example-section column">
              <div className="column">
                    <div className="padding col-5-lg">
                        <div className="row">
                          <Select
                            title="Default"
                            type="default"
                            options={options_1}
                            isOpen={isOpen1}
                            toggleOpen={toggleOpen1}
                            onSelect={handleOptionSelect1}
                            selectNumber={1}
                          />
                          <Select
                            title="Checkbox"
                            type="checkbox"
                            options={options_2}
                            isOpen={isOpen2}
                            toggleOpen={toggleOpen2}
                            onSelect={handleOptionSelect2}
                            selectNumber={2}
                          /> 
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="padding col-12-lg">
 
                        <div className="code-container">
                            <Tab options={tabHeaders} content={tabContent} />
                        </div>
 
                    </div>
                </div>
            </div>

             {/* Table   */}
             <Table data={tableContent} headers={tableHeaders}/>


        </div>
      );


};

export default SelectPage;