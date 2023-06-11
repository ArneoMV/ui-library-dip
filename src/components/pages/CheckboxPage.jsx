import React, { useState } from 'react';
import Checkbox from '../system/Checkbox';
import CheckboxHover from '../system/checkbox/CheckboxHover';
import CheckboxActive from '../system/checkbox/CheckboxActive';
import CheckboxDisabled from '../system/checkbox/CheckboxDisabled';
import Table from '../system/Table';
import Prism from "prismjs";
import "../../styles/prism.css";

const CheckboxPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
    const data = [
        { cell1: 'label', cell2: 'Label for the checkbox', cell3: 'string', cell4: '-' },
        { cell1: 'checked', cell2: 'Indicates whether checkbox is checked', cell3: 'boolean', cell4: 'false' },
        { cell1: 'onChange', cell2: 'Callback function for checkbox change', cell3: 'function', cell4: '-' },
        { cell1: 'disabled', cell2: 'Disables the checkbox', cell3: 'boolean', cell4: 'false' },
    ];
  
    return (
        <div className="page-structure">
            <h2>Checkbox</h2>
            <p>Komponenta potvrdnog okvira</p>
    
            <h3>Kada ga koristiti</h3>
            <ul>
                <li>Koristi se za odabir više vrijednosti iz nekoliko opcija.</li>
                <li>Ako koristite samo jedan potvrdni okvir, to je isto kao da koristite Switch za prebacivanje između dva stanja. Razlika je u tome što će Switch izravno pokrenuti promjenu stanja, ali potvrdni okvir samo označava stanje kao promijenjeno i to je potrebno poslati.</li>
            </ul>
    
            <div className="example-section column">

                {/* Exampla section */}
                <div className="padding column">
                    <h3>Primjeri</h3>
                    <div className="row">
                        <Checkbox
                            label="Normal"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                         <CheckboxHover
                            label="Hover"
                        />
                        <CheckboxActive
                            label="Active"
                        />
                         <CheckboxDisabled
                            label="Disabled"
                        />

                    </div>
                </div>
                <div className="horizontal-line"></div>
    
                {/* JSX Code example */}
                <div className="padding">
                    <h3>Javascript</h3>
                    <pre className="language-javascript"><code>{`
 <Checkbox
 label="Normal"
 checked={isChecked}
 onChange={handleCheckboxChange}
/>
`}</code></pre> 
                </div>

            </div>

             {/* Table   */}
             <Table data={data} />


        </div>
      );


};

export default CheckboxPage;