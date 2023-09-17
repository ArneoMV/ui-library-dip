import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import Tab from '../Tab/Tab';
import Form from './Form';
import codeJsx from './Code/form_jsx.txt';
import { Title, Paragraf } from '../../Atoms/Typography/Typography';

const FormPage = () => {

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
        ' - ',
        JSXfileContent,
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
            <article className="col-10-lg">
                <Title level={2} color="neutral-700">Forma za prijavu</Title>
                <Paragraf>Obrazac za prijavu je organ koji se koristi za prikupljanje korisničkih podataka kako bi se omogućila autentikacija i pristup određenom sustavu, aplikaciji ili usluzi. Ova komponenta je ključna za korisničke interakcije i često se koristi na web stranicama koje zahtijevaju korisničke račune.</Paragraf>
                <Title level={4} color="neutral-700">Kada se koristi:</Title>
                <ul>
                    <li>Korisnička Identifikacija: Forma za prijavu obično sadrži polja za unos korisničkog imena ili e-pošte te lozinke. Ovi podaci koriste se za identifikaciju korisnika.</li>
                    <li>Sigurnost i Autentikacija: Ova komponenta igra ključnu ulogu u zaštiti korisničkih podataka. Osigurava da samo ovlašteni korisnici mogu pristupiti sustavu.</li>
                    <li>Praktičnost i Korisničko Iskustvo: Kvalitetno dizajnirani obrasci za prijavu pružaju intuitivno korisničko iskustvo, s jasnim uputama i opcijama za oporavak lozinke u slučaju zaborava.</li>
                </ul>
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
