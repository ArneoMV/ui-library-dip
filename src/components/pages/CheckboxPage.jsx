import React, { useState } from 'react';
import Checkbox from '../system/Checkbox';
import Table from '../system/Table';
import Prism from "prismjs";
import "../../styles/prism.css";

const CheckboxPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
    const data = [
        { cell1: 'cell1_1', cell2: 'cell2_1', cell3: 'cell3_1', cell4: 'cell4_1' },
        { cell1: 'cell1_2', cell2: 'cell2_2', cell3: 'cell3_2', cell4: 'cell4_2' },
        { cell1: 'cell1_3', cell2: 'cell2_3', cell3: 'cell3_3', cell4: 'cell4_3' },
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
                    <div className="column">
                            <h5 className="example-title">Primary</h5>
                            <Checkbox
                                label="Normal Checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                    </div>
                </div>
                <div className="horizontal-line"></div>
    
                {/* JSX Code example */}
                <div className="padding">
                    <h3>Javascript</h3>
                    <pre className="language-javascript"><code>
    {'<div className={`input ${error ? \'input-error\' : \'\'} ${success ? \'input-success\' : \'\'}\'}>\n' +
        '  {label && <label className="input-label">{label}</label>}\n' +
        '  <div className="input-wrapper">\n' +
        '    {error && <FaExclamationCircle className="input-icon input-icon-error" />}\n' +
        '    {success && <FaCheckCircle className="input-icon input-icon-success" />}\n' +
        '    <input\n' +
        '      type="text"\n' +
        '      className="input-field"\n' +
        '      placeholder={placeholder}\n' +
        '      value={inputValue}\n' +
        '      onChange={handleChange}\n' +
        '      disabled={disabled}\n' +
        '    />\n' +
        '  </div>\n' +
        '  {error && <div className="input-error-text">{error}</div>}\n' +
    '</div>'}
    </code></pre>
     
                </div>
            </div>

             {/* Table   */}
             <Table data={data} />

             
        </div>
      );


};

export default CheckboxPage;

{/* <p>{isChecked ? 'Checked' : 'Unchecked'}</p> */}