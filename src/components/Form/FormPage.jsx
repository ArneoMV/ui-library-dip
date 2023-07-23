import React, { useEffect, useState } from 'react';
import Form from './Form';
import Table from '../Table/Table';
import Tab from '../Tab/Tab';
import codeJsx from './Code/form_jsx.txt';
import codeScss from './Code/form_scss.txt';
// import Prism from "prismjs";
// import "../../styles/prism.css";

const FormPage = () => {

    // Tab component
    const [JSXfileContent, setFileContent] = useState('');
    const [SCSSfileContent, setSecondTabContent] = useState('');

    useEffect(() => {
        fetchTextContent(codeJsx, setFileContent);
        fetchTextContent(codeScss, setSecondTabContent);
    }, []);

    const fetchTextContent = (url, setContent) => {
        fetch(url)
            .then((response) => response.text())
            .then((content) => setContent(content))
            .catch((error) => console.log(error));
    };
    const tabHeaders = [' - ', 'JSX', 'SCSS'];
    const tabContent = [
        ' - ',
        JSXfileContent,
        SCSSfileContent,
    ];
    // Table data
    const tableHeaders = ['API', 'Opis'];
    const tableContent = [
        { cell1: 'handleSubmit', cell2: 'Funkcija koja se poziva prilikom predaje obrasca i koja pokreće proces obrade podataka obrasca.' },
        { cell1: 'register', cell2: 'Funkcija koja registrira polje obrasca unutar react-hook-form biblioteke i omogućava praćenje vrijednosti i provjeru valjanosti.' },
        { cell1: 'control', cell2: 'Objekt koji kontrolira stanje obrasca i polja unutar react-hook-form biblioteke.' },
        { cell1: 'reset', cell2: 'Funkcija koja resetira stanje obrasca i polja na početne vrijednosti.' },
        { cell1: 'errors', cell2: 'Objekt koji sadrži greške za svako polje obrasca.' },
        { cell1: 'onSubmit', cell2: 'Funkcija koja se poziva kada se obrazac pošalje i koja obrađuje unesene podatke obrasca.' },
        { cell1: 'label', cell2: 'Tekst koji se prikazuje kao oznaka za polje obrasca.' },
        { cell1: 'placeholder', cell2: 'Tekst koji se prikazuje kao privremeni tekst unutar polja obrasca.' },
        { cell1: 'type', cell2: 'Vrsta polja obrasca (npr. "email", "password").' },
        { cell1: 'value', cell2: 'Trenutna vrijednost polja obrasca.' },
        { cell1: 'error', cell2: 'Poruka o grešci koja se prikazuje ako je polje obrasca nevaljano.' },
    ];

    return (
        <div className="modular-page-structure">
            <article>
                <h2>Forma</h2>
                <p>Olakšavaju prebacivanje između različitih prikaza. Tab komponentu možete koristiti unutar vaše React aplikacije, posebno ako želite organizirati sadržaj na više tabova. Može se koristiti na različitim stranicama, modulima ili dijelovima aplikacije gdje je potrebno prikazati više sadržaja grupiranih u tabove.</p>
                <ul>
                    <h4>Kada korisiti formu</h4>
                    <li>Kada želite prikazati više tabova s različitim sadržajem</li>
                    <li>Za unos ili ažuriranje podataka u sustavima upravljanja sadržajem (CMS)</li>
                    <li>Prikupljanje povratnih informacija, anketa ili upitnika od korisnika</li>
                </ul>
                <h3>Kada korisiti formu</h3>
            </article>
 
            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="column">
                            <Form />
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="horizontal-line"></div>
                    <div className="padding col-12-lg">
 
                        <div className="code-container">
                            <Tab options={tabHeaders} content={tabContent} />
                        </div>
 
                    </div>
                </div>
 
 
            </div>
 
            {/* Table */}
            <Table data={tableContent} headers={tableHeaders}/>
        </div>
    );
};

export default FormPage;
