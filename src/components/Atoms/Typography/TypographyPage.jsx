import React, { useEffect, useState } from 'react';
import { Title, Paragraf, Button, Caption, Link } from './Typography';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';
import Line from '../Line/Line';

import codeTitleTextFile from './Code/title.txt';
import codeParagrafTextFile from './Code/paragraf.txt';
import codeStylesTextFile from './Code/styles.txt';

const TypographyPage = () => {
    // Tab component
    const [codeTitle, setFileContent] = useState('');
    const [codeParagraf, setSecondTabContent] = useState('');
    const [codeStyles, setThirdTabContent] = useState('');

  
    useEffect(() => {
        fetchTextContent(codeTitleTextFile, setFileContent);
        fetchTextContent(codeParagrafTextFile, setSecondTabContent);
        fetchTextContent(codeStylesTextFile, setThirdTabContent);
      }, []);

    const fetchTextContent = (url, setContent) => {
        fetch(url)
          .then((response) => response.text())
          .then((content) => setContent(content))
          .catch((error) => console.log(error));
    };

    const tabHeaders_1 = [ ' - ', 'JSX',];
    const tabContent_1 = [' - ', codeTitle];
    const tabHeaders_2 = [' - ', 'JSX'];
    const tabContent_2 = [' - ', codeParagraf];
    const tabHeaders_3 = [' - ', 'Styles'];
    const tabContent_3 = [' - ', codeStyles];

    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableContent = [
        { cell1: 'children', cell2: 'Tekst koji će biti prikazan unutar paragrafa', cell3: 'String', cell4: '-' },
        { cell1: 'type', cell2: 'Definiše vrstu paragrafa (primarna, uspjeh, upozorenje, opasnost)', cell3: 'String', cell4: 'default' },
        { cell1: 'disabled', cell2: 'Onemogućava interakciju s paragrafom', cell3: 'Boolean', cell4: 'false' },
        { cell1: 'mark', cell2: 'Označava tekst kao markiranu oznaku (highlight)', cell3: 'Boolean', cell4: 'false' },
        { cell1: 'code', cell2: 'Označava tekst kao kod (monospaced font)', cell3: 'Boolean', cell4: 'false' },
        { cell1: 'keyboard', cell2: 'Označava tekst kao tastaturu (monospaced font)', cell3: 'Boolean', cell4: 'false' },
        { cell1: 'underline', cell2: 'Podvlači tekst', cell3: 'Boolean', cell4: 'false' }, 
        { cell1: 'delete', cell2: 'Označava tekst kao obrisano (strikethrough)', cell3: 'Boolean', cell4: 'false' }, 
        { cell1: 'strong', cell2: 'Označava tekst kao podebljan (bold)', cell3: 'Boolean', cell4: 'false' }, 
        { cell1: 'italic', cell2: 'Označava tekst kao kurziv (italic)', cell3: 'Boolean', cell4: 'false' }, 
        { cell1: 'href', cell2: 'URL na koji će se preusmjeriti korisnika ako je paragraf Link tipa', cell3: 'Boolean', cell4: 'false' }, 
        { cell1: 'target', cell2: 'Postavlja metu otvaranja veze (npr. _blank za otvaranje u novom prozoru)', cell3: 'Boolean', cell4: 'false' }, 
    ];


    return (
        <div className="modular-page-structure">
            <article className='col-10-lg'>
                <Title level={2} color="neutral-700">Tipografija</Title>
                <Paragraf>Tipografija se odnosi na odabir i stilizaciju tipografskih elemenata, uključujući fontove, veličinu, razmak između slova i stilove. Ona je ključni element dizajna koji utječe na čitljivost, percepciju i estetiku sučelja.</Paragraf>
                <Title level={4} color="neutral-700">Značajke tipografije:</Title>
                <ul>
                    <li>Pravilno odabrana tipografija omogućuje čitljivost teksta i uspostavlja hijerarhiju informacija na stranici, ističući naslove, podnaslove i tijelo teksta.</li>
                    <li>Tipografija doprinosi stilu i prepoznatljivosti sučelja. Odabir fontova može reflektirati ozbiljnost, kreativnost ili inovativnost.</li>
                    <li>Debljina, boja i veličina fonta se često koriste za naglašavanje važnih informacija ili akcija, poput naslova članaka ili CTA (Call to Action) gumba.</li>
                </ul>
                <h3>Vrste</h3>
                <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            </article>
            {/* Heading */}
            <div className="example-section column col-10-lg">
                <div className="column">
                        <div className="column col-gap-lg padding margin">
                            <Title level={1} color="neutral-700">.t1 Metro Design </Title>
                            <Title level={2} color="neutral-700">.t2 Metro Design </Title>
                            <Title level={3} color="neutral-700">.t3 Metro Design </Title>
                            <Title level={4} color="neutral-700">.t4 Metro Design </Title>
                            <Title level={5} color="neutral-700">.t5 Metro Design </Title>
                            <Title level={6} color="neutral-700">.t6 Metro Design </Title>
                        </div>
                        <Line />
                    <div className="padding col-10-lg">
                        <div className="code-container">
                            <Tab options={tabHeaders_1} content={tabContent_1} />
                        </div>
                    </div>
                </div>  
            </div>
             {/* Paragraf */}
            <div className="example-section column col-10-lg">
                <div className="column">
                    <div className="padding padding-top">
                        <div className="column col-gap-lg ">

                            {/* Paragraf */}
                            <Paragraf>Typo (default)</Paragraf>
                            <Paragraf type="primary">Typo (primary)</Paragraf>
                            <Paragraf type="success">Typo (success)</Paragraf>
                            <Paragraf type="warning">Typo (warning)</Paragraf>
                            <Paragraf type="danger">Typo (danger)</Paragraf>
                            <Paragraf disabled>Typo (disabled)</Paragraf>
                            <Paragraf mark>Typo (mark)</Paragraf>
                            <Paragraf code>Typo (code)</Paragraf>
                            <Paragraf keyboard>Typo (keyboard)</Paragraf>
                            <Paragraf underline>Typo (underline)</Paragraf>
                            <Paragraf delete>Typo (delete)</Paragraf>
                            <Paragraf strong>Typo (strong)</Paragraf>
                            <Paragraf italic>Typo (italic)</Paragraf>

                            {/* Link */}
                            <Link href="https://www.youtube.com/watch?v=_E64uGx0ibo" target="_blank">Typo (Link)</Link>
                        </div>
                    </div>
                    <Line />
                    <div className="padding col-12-lg">
                        <div className="code-container">
                            <Tab options={tabHeaders_2} content={tabContent_2} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Table */}
            <Table data={tableContent} headers={tableHeaders}/>
            {/* Style */}
            <div className="example-section column">
               
                <div className="column">
                    <div className="padding padding-top">
                        <div className="column col-gap-lg col-7-lg">
                            <article>
                            <h3>Stilovi</h3>
                            <p>SCSS kod automatski računa i primjenjuje veličine fonta za različite razine naslova 
                                na temelju odabranog omjera veličina fonta. Također postavlja zadane stilove za đ
                                paragrafe, liste i naslove (<span className='bold'>h1, h2, h3, h4</span>), te omogućuje prilagodbu putem klase .typo 
                                i <span className='bold'>.caption</span>. Uvezene SCSS datoteke (<span className='bold'>mixin.scss, variable.scss, color.scss</span>) vjerojatno 
                                sadrže dodatne mixin-ove, varijable i definicije boja koje doprinose ukupnom 
                                stiliziranju tipografije.</p>

                                
                            </article>
                        </div>
                    </div>

                    <Line />
                    <div className="padding col-12-lg">
                        <div className="code-container">
                            <Tab options={tabHeaders_3} content={tabContent_3} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TypographyPage;