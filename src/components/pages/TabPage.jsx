import React from "react";
import Tab from '../system/Tab';
import Prism from "prismjs";
import "../../styles/prism.css";
import Table from '../system/Table';

const TabPage = () => {
    const data = [
        { cell1: 'type', cell2: 'Vrsta tipke', cell3: 'string', cell4: 'default' },
        { cell1: 'children', cell2: 'Sadržaj unutar tipke', cell3: 'node', cell4: '-' },
        { cell1: 'disabled', cell2: 'Zastavica za onemogućavanje tipke', cell3: 'bool', cell4: 'false' },
    ];
    const options = ['Polje 1', 'Polje 2', 'Polje 3'];
    return (
        <div className="modular-page-structure">
            <h2>Tab</h2>
            <p>Komponenta obrasca visokih performansi s upravljanjem opsegom podataka. Uključujući prikupljanje podataka, provjeru i stilove.</p>
            <ul>
                <h4>Kada korisiti tab koristiti</h4>
                <li>Kada trebate stvoriti instancu ili prikupiti informacije.</li>
                <li>Kada trebate potvrditi polja u određenim pravilima.</li>
            </ul>
            <h3>Kada korisiti formu</h3>

            {/* Primjeri */}
            <div className="example-section column">

                <div className="row">
                    <div className="padding col-5-lg">
                        <div className="column">
                            <Tab options={options} />
                        </div>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="col-5-lg"></div>
                </div>
                
                <div className="horizontal-line"></div>

                <div className="padding">
                    <h3>Javascript</h3>
                    <pre className="language-javascript"><code>{`

`}</code></pre> 
                </div>   
            </div>

            {/* Table */}
            <Table data={data} />
        </div>
    );
};

export default TabPage;