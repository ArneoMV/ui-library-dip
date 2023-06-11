import React, { useState } from 'react';
import Select from '../system/Select';
import Table from '../system/Table';
import Prism from "prismjs";
import "../../styles/prism.css";

const SelectPage = () => {
  // Data
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

    
    // Table data
    const data = [
        { cell1: 'title', cell2: 'Funkcija za obradu odabira', cell3: 'string', cell4: 'Default' },
        { cell1: 'type', cell2: 'Vrsta select komponente', cell3: 'string', cell4: 'Default' },
        { cell1: 'options', cell2: 'Opcije za select', cell3: 'array', cell4: 'options_1' },
        { cell1: 'selectNumber', cell2: 'Broj odabira selecta', cell3: 'number', cell4: '1' },
        { cell1: 'isOpen', cell2: 'Zastavica za kontrolu stanja otvorenosti', cell3: 'bool', cell4: 'isOpen1' },
        { cell1: 'toggleOpen', cell2: 'Funkcija za prebacivanje stanja otvorenosti', cell3: 'func', cell4: 'toggleOpen1' },
        { cell1: 'onSelect', cell2: '	Funkcija za obradu odabira', cell3: 'func', cell4: 'handleOptionSelect1' },
        
    ];
  
    return (
        <div className="page-structure">
            <h2>Select</h2>
            <p>Radio</p>
    
            <h3>Kada ga koristiti</h3>
            <ul>
                <li>Koristi se za odabir jednog stanja iz više opcija.</li>
                <li>Razlika od Selecta je što je Radio vidljiv korisniku i može olakšati usporedbu izbora, što znači da ih ne bi trebalo biti previše.</li>
            </ul>
            <div className="example-section column">
                {/* Exampla section */}
                <div className="padding column">
                    <h3>Primjeri</h3>
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
    
                {/* JSX Code example */}
                <div className="padding">
                    <h3>Javascript</h3>
                    <pre className="language-javascript"><code>{`
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
`}</code></pre> 
                </div>

            </div>

             {/* Table   */}
             <Table data={data} />


        </div>
      );


};

export default SelectPage;