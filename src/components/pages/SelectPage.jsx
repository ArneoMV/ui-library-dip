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
        { cell1: 'label', cell2: 'cell2_1', cell3: 'cell3_1', cell4: 'cell4_1' },
        { cell1: 'checked', cell2: 'cell2_2', cell3: 'cell3_2', cell4: 'cell4_2' },
        { cell1: 'onChange', cell2: 'cell2_3', cell3: 'cell3_3', cell4: 'cell4_3' },
        { cell1: 'disabled', cell2: 'cell2_3', cell3: 'cell3_3', cell4: 'cell4_3' },
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
                        type="default"
                        options={options_1}
                        isOpen={isOpen1}
                        toggleOpen={toggleOpen1}
                        onSelect={handleOptionSelect1}
                        selectNumber={1}
                        title="Default"
                    />
                    <Select
                        type="checkbox"
                        options={options_2}
                        isOpen={isOpen2}
                        toggleOpen={toggleOpen2}
                        onSelect={handleOptionSelect2}
                        selectNumber={2}
                        title="Checkbox"
                    />
                    </div>
                </div>
                <div className="horizontal-line"></div>
    
                {/* JSX Code example */}
                <div className="padding">
                    <h3>Javascript</h3>
                    <pre className="language-javascript"><code>{`

<Select
type="default" // Wrap the value in quotes
options={options_1}
isOpen={isOpen1}
toggleOpen={toggleOpen1}
onSelect={handleOptionSelect1}
selectNumber={1}
/>
<Select
type="checkbox" // Wrap the value in quotes
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