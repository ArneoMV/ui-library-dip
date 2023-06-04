import React from "react";
import Input from '../system/Input';
import Prism from "prismjs";
import "../../styles/prism.css";

const InputPage = () => {
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
        </div>
  );
};

export default InputPage;