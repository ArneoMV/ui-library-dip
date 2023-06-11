import React from "react";
import Input from '../system/Input';
import Prism from "prismjs";
import "../../styles/prism.css";
import Table from '../system/Table';

const InputPage = () => {

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
        <h2>Unos</h2>
        <p>Osnovni widget za primanje korisničkog unosa je tekstualno polje. Tipkovnica i miš mogu se koristiti za unos ili promjenu podataka.</p>

        <h3>Kada ga koristiti</h3>
        <ul>
            <li>Potreban je korisnički unos u polje obrasca.</li>
            <li>Potreban je unos za pretraživanje.</li>
        </ul>

        <div className="example-section column">

            <div className="padding column">
                <h3>Primjeri</h3>
                <Input label="Normal Input" placeholder="Enter text" type="text" />
                <Input label="success Input" placeholder="Enter password" success />
                <Input label="Error Input" placeholder="Enter password" error="Invalid input" />
                <Input label="Disabled Input" placeholder="Enter text" disabled />


                <div className="text-section">
                    <h3>Vrste</h3>
                    <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu u antd</p>
                </div>
            </div>
            <div className="horizontal-line"></div>

            <div className="padding">
                    <h3>Javascript</h3>
                    <pre className="language-javascript"><code>{`
<Input label="Normal Input" placeholder="Enter text" type="text" />
<Input label="success Input" placeholder="Enter password" success />
<Input label="Error Input" placeholder="Enter password" error="Invalid input" />
<Input label="Disabled Input" placeholder="Enter text" disabled />
`}</code></pre> 
 
            </div>   
        </div>
        
        {/* Table   */}
        <Table data={data} />
    </div>
  );
};

export default InputPage;