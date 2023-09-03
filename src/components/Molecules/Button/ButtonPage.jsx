import React, { useEffect, useState } from 'react';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';

import Button from './Button';
import codeJsx from './code/button_jsx.txt';

const ButtonPage = () => {
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
        '-',
        JSXfileContent,
        
    ];
    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableText = [
        { cell1: 'type', cell2: 'Vrsta tipke', cell3: 'string', cell4: 'default' },
        { cell1: 'children', cell2: 'Sadržaj unutar tipke', cell3: 'node', cell4: '-' },
        { cell1: 'disabled', cell2: 'Zastavica za onemogućavanje tipke', cell3: 'bool', cell4: 'false' },
    ];
  return (
    <div className="modular-page-structure">
            <article>
                <h2>Gumb</h2>
                <p>Služi za pokretanje operacije.</p>
                <p>Gumb je molekula koja predstavlja jednostavan element sučelja namijenjen interakciji korisnika. Gumbi često sadrže tekst ili ikonu i koriste se za izvođenje akcija ili prijelaz na druge dijelove sučelja.</p>
                
                <h3>Kada ga koristiti</h3>
                <ul>
                    <li>Filtriranje i Prilagodba: Potvrdni okviri su korisni u filtriranju i prilagodbi prikaza sadržaja, kao što su opcije sortiranja ili filtriranja rezultata pretrage.</li>
                    <li>Vizualni Indikator: Promjenom izgleda ili animacijama, gumbi pružaju vizualni indikator korisnicima da su interaktivni i moguće ih je kliknuti.</li>
                    <li>Usmjeravanje Korisnika: Gumbi se često koriste za usmjeravanje korisnika na druge dijelove sučelja, poput odabira različitih kartica ili prelaska na nove stranice.</li>
                </ul>
                <p>Gumbi omogućuju korisnicima izvođenje različitih akcija, kao što su "Spremi," "Pošalji" ili "Izbriši."</p>
                <ul>
                    <h4>Vrsta gumba</h4>
                    <li>Primarni gumb: označava glavnu radnju, najviše jedan primarni gumb u jednom odjeljku.</li>
                    <li>Zadani gumb: označava niz akcija bez prioriteta.</li>
                    <li>Crtkani gumb: obično se koristi za dodavanje radnje.</li>
                    <li>Gumb za tekst: koristi se za najsporedniju radnju.</li>
                    <li>Link gumb: koristi se za vanjske poveznice.</li>
                </ul>
                <ul>
                    <h4>Stanja</h4>
                    <li>error: koristi se za radnje rizika, poput brisanja ili autorizacije.</li>
                    <li>outline: koristi se u situacijama sa složenom pozadinom, obično na početnim stranicama.</li>
                    <li>disabled: kada akcije nisu dostupne.</li>
                    <li>loading: dodajte spinner za učitavanje u gumb, izbjegavajući i više podnošenja</li>
                </ul>
            </article>

            <h3>Vrste</h3>
            <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="col">
                        <div className="row padding">
                            <h5 className="example-title">Primary</h5>
                            <Button type="primary">Normal</Button>
                            <Button type="primary" className="hover">Hover</Button>
                            <Button type="primary" className="active">Active</Button>
                            <Button type="primary" className="focus">Focused</Button>
                            <Button type="primary" disabled>Disabled</Button>
                        </div>

                        <div className="row padding">
                            <h5 className="example-title">Secondary</h5>
                            <Button type="secondary">Normal</Button>
                            <Button type="secondary" className="hover">Hover</Button>
                            <Button type="secondary" className="active">Active</Button>
                            <Button type="secondary" className="focus">Focused</Button>
                            <Button type="secondary" disabled>Disabled</Button>
                        </div>

                        <div className="row padding">
                            <h5 className="example-title">Link</h5>
                            <Button type="link">Normal</Button>
                            <Button type="link" className="hover">Hover</Button>
                            <Button type="link" className="active">Active</Button>
                            <Button type="link" className="focus">Focused</Button>
                            <Button type="link" disabled>Disabled</Button>
                        </div>
                        <div className="row padding">
                            <h5 className="example-title">Icon</h5>
                            <Button type="icon" iconName="arrowLeftShortFill" />
                            <Button type="icon" iconName="check2" />
                            <Button type="icon" iconName="capslockFill" />
                            <Button type="icon" iconName="chevronRight2" />
                            <Button type="icon" iconName="pencilFill" />
                        </div>
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
 
            {/* Table */}
            <Table data={tableText} headers={tableHeaders}/>
    </div>
  );
};

export default ButtonPage;