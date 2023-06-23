import React from "react";
import Button from '../system/Button';
import Prism from "prismjs";
import "../../styles/prism.css";
import Table from '../system/Table';

const ButtonPage = () => {

    const data = [
        { cell1: 'type', cell2: 'Vrsta tipke', cell3: 'string', cell4: 'default' },
        { cell1: 'children', cell2: 'Sadržaj unutar tipke', cell3: 'node', cell4: '-' },
        { cell1: 'disabled', cell2: 'Zastavica za onemogućavanje tipke', cell3: 'bool', cell4: 'false' },
    ];
  return (
    <div className="page-structure">
        <h2>Gumb</h2>
        <p>Služi za pokretanje operacije.</p>

        <h3>Kada ga koristiti</h3>
        <p>Gumb znači operaciju (ili niz operacija). Klikom na gumb pokrenut će se odgovarajuća poslovna logika.</p>

        <div className="text-section">
            <p>Metro dizajn nudi 5 vrsta gumba.</p>
            <ul>
                <li>Primarni gumb: označava glavnu radnju, najviše jedan primarni gumb u jednom odjeljku.</li>
                <li>Zadani gumb: označava niz akcija bez prioriteta.</li>
                <li>Crtkani gumb: obično se koristi za dodavanje radnje.</li>
                <li>Gumb za tekst: koristi se za najsporedniju radnju.</li>
                <li>Link gumb: koristi se za vanjske poveznice.</li>
            </ul>
        </div>

        <div className="text-section">
            <p>I još 4 druge nekretnine dodatno.</p>
            <ul>
                <li>opasnost: koristi se za radnje rizika, poput brisanja ili autorizacije.</li>
                <li>duh: koristi se u situacijama sa složenom pozadinom, obično na početnim stranicama.</li>
                <li>onemogućeno: kada akcije nisu dostupne.</li>
                <li>učitavanje: dodajte spinner za učitavanje u gumb, izbjegavajući i više podnošenja</li>
            </ul>
        </div>

        {/* Primjeri */}
        <div className="example-section column">

            <div className="padding column">
                <h3>Primjeri</h3>
                <div className="column ">
                    <div className="row ">
                        <h5 className="example-title">Primary</h5>
                        <Button type="primary">Normal</Button>
                        <Button type="primary" className="hover">Hover</Button>
                        <Button type="primary" className="active">Active</Button>
                        <Button type="primary" className="focus">Focused</Button>
                        <Button type="primary" disabled>Disabled</Button>
                    </div>

                    <div className="row">
                        <h5 className="example-title">Secondary</h5>
                        <Button type="secondary">Normal</Button>
                        <Button type="secondary" className="hover">Hover</Button>
                        <Button type="secondary" className="active">Active</Button>
                        <Button type="secondary" className="focus">Focused</Button>
                        <Button type="secondary" disabled>Disabled</Button>
                    </div>

                    <div className="row">
                        <h5 className="example-title">Link</h5>
                        <Button type="link">Normal</Button>
                        <Button type="link" className="hover">Hover</Button>
                        <Button type="link" className="active">Active</Button>
                        <Button type="link" className="focus">Focused</Button>
                        <Button type="link" disabled>Disabled</Button>
                    </div>
                </div>

                <div className="text-section">
                    <h3>Vrste</h3>
                    <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu u antd</p>
                </div>
            </div>
            <div className="horizontal-line"></div>

            <div className="padding">
            <h3>Javascript</h3>
            <pre className="language-javascript"><code>{`
<Button type="primary">Normal</Button>
<Button type="primary" className="hover">Hover</Button>
<Button type="primary" className="active">Active</Button>
<Button type="primary" className="focus">Focused</Button>
<Button type="primary" disabled>Disabled</Button>

Button type="secondary">Normal</Button>
<Button type="secondary" className="hover">Hover</Button>
<Button type="secondary" className="active">Active</Button>
<Button type="secondary" className="focus">Focused</Button>
<Button type="secondary" disabled>Disabled</Button>

<Button type="link">Normal</Button>
<Button type="link" className="hover">Hover</Button>
<Button type="link" className="active">Active</Button>
<Button type="link" className="focus">Focused</Button>
<Button type="link" disabled>Disabled</Button>
`}</code></pre> 
            </div>   
        </div>

         {/* Table   */}
         <Table data={data} />
    </div>
  );
};

export default ButtonPage;