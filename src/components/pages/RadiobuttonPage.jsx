import React, { useState } from 'react';
import RadioButton from '../system/RadioButton';
// import RadiobuttonHover from '../system/radiobutton/RadiobuttonHover';
// import RadiobuttonActive from '../system/radiobutton/RadiobuttonActive';
// import RadiobuttonDisabled from '../system/radiobutton/CRadiobuttonDisabled';
import Table from '../system/Table';
import Prism from "prismjs";
import "../../styles/prism.css";

const RadiobuttonPage = () => {
    const [selectedValue, setSelectedValue] = useState('Normal');

    const handleRadioButtonChange = (value) => {
      setSelectedValue(value);
    };
    const data = [
        { cell1: 'label', cell2: 'Label for the input field', cell3: 'string', cell4: '-' },
        { cell1: 'placeholder', cell2: 'Placeholder text for the input field', cell3: 'string', cell4: '-' },
        { cell1: 'type', cell2: 'Type of the input field', cell3: 'string', cell4: 'text' },
        { cell1: 'success', cell2: 'Indicates a successful input', cell3: 'bool', cell4: 'false' },
        { cell1: 'error', cell2: 'Error message for invalid input', cell3: 'string', cell4: '-' },
        { cell1: 'disabled', cell2: 'Disables the input field', cell3: 'bool', cell4: 'false' },
    ];
  
    return (
        <div className="page-structure">
            <h2>Radio</h2>
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
                    <RadioButton
                        label="Normal"
                        checked={selectedValue === 'Normal'}
                        onChange={handleRadioButtonChange}
                    />
                    <RadioButton
                        label="Checked"
                        checked={selectedValue === 'Checked'}
                        onChange={handleRadioButtonChange}
                    />
                    <RadioButton
                        label="Disabled"
                        checked={selectedValue === 'Disabled'}
                        onChange={handleRadioButtonChange}
                    />

                    </div>
                </div>
                <div className="horizontal-line"></div>
    
                {/* JSX Code example */}
                <div className="padding">
                    <h3>Javascript</h3>
                    <pre className="language-javascript"><code>{`
<RadioButton
    label="Normal"
    checked={selectedValue === 'Normal'}
    onChange={handleRadioButtonChange}
/>
`}</code></pre> 
                </div>

            </div>

             {/* Table   */}
             <Table data={data} />


        </div>
      );


};

export default RadiobuttonPage;