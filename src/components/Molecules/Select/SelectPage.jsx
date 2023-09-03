import React, { useEffect, useState } from 'react';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';

import Select from './Select';
import codeJsx from './Code/select_jsx.txt';

const SelectPage = () => {
  // Select component
  const options_1 = [
    { label: 'Liquorice cake' },
    { label: 'Toffee soufflé wafer' },
    { label: 'Tootsie roll candy' },
  ];
  const options_2 = [
    { label: 'Ice cream' },
    { label: 'Lemon drop' },
    { label: 'Halvah jelly' },
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
        ' - ',
        JSXfileContent,
    ];
    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableContent = [
        { cell1: 'title', cell2: 'Funkcija za obradu odabira', cell3: 'string', cell4: 'Default' },
        { cell1: 'type', cell2: 'Vrsta select komponente', cell3: 'string', cell4: 'Default' },
        { cell1: 'options', cell2: 'Opcije za select', cell3: 'array', cell4: 'options_1' },
        // { cell1: 'selectNumber', cell2: 'Broj odabira selecta', cell3: 'number', cell4: '1' },
        { cell1: 'isOpen', cell2: 'Zastavica za kontrolu stanja otvorenosti', cell3: 'bool', cell4: 'isOpen1' },
        { cell1: 'toggleOpen', cell2: 'Funkcija za prebacivanje stanja otvorenosti', cell3: 'func', cell4: 'toggleOpen1' },
        { cell1: 'onSelect', cell2: '	Funkcija za obradu odabira', cell3: 'func', cell4: 'handleOptionSelect1' },
        
    ];
  
    return (
        <div className="modular-page-structure">
          <article>
            <h2>Izbornik</h2>
            <p>Izbornik (Select) je molekula koja omogućuje korisnicima odabir jedne opcije iz padajuće liste. Izbornici su korisni za prikazivanje više opcija na ograničenom prostoru.</p>
            <h4>Kada ga koristiti</h4>
            <ul>
              <li>Odabir Iz Skupa Opcija: Izbornici omogućuju korisnicima odabir jedne opcije između više dostupnih opcija, čime se omogućava prilagodba sučelja prema korisničkim potrebama.</li>
              <li>Organizacija Opcija: Opcije u izborniku često su organizirane po kategorijama ili abecednom redu, čime se olakšava pronalaženje željene opcije.</li>
              <li>Smanjenje Nereda: Izbornici su korisni kada je potrebno smanjiti vizualni nered i kompaktno prikazati više opcija na sučelju, čime se poboljšava preglednost.</li>
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
                          />
                          <Select
                            title="Chupa chups"
                            type="checkbox"
                            options={options_2}
                            isOpen={isOpen2}
                            toggleOpen={toggleOpen2}
                            onSelect={handleOptionSelect2}
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