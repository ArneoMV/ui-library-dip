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
        { cell1: 'label', cell2: 'cell2_1', cell3: 'cell3_1', cell4: 'cell4_1' },
        { cell1: 'checked', cell2: 'cell2_2', cell3: 'cell3_2', cell4: 'cell4_2' },
        { cell1: 'onChange', cell2: 'cell2_3', cell3: 'cell3_3', cell4: 'cell4_3' },
        { cell1: 'disabled', cell2: 'cell2_3', cell3: 'cell3_3', cell4: 'cell4_3' },
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