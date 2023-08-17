import React, { useEffect, useState } from 'react';
import { Title, Paragraf, Button, Caption, Link } from './Typography';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';
import DividerH from '../Divider/DividerH';

import codeTitleTextFile from './Code/title.txt';
import codeParagrafTextFile from './Code/paragraf.txt';
import codeStylesTextFile from './Code/styles.txt';
// import Prism from "prismjs";
// import "../../styles/prism.css";

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
                <h2>Typography</h2>
                <p>Napravljene su komponente Title (1/6), Paragraf i Link s korištenjem fluidne skale fonta kako bi se postiglo responzivno ponašanje teksta na različitim uređajima.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Tipografija se koristi u svim oblicima tiskanih i digitalnih materijala kako bi poboljšala čitljivost, privukla pažnju i stvorila estetski doživljaj.</li>
                    <li>Kvalitetna tipografija poboljšava korisničko iskustvo, čini sadržaj jasnijim i doprinosi prepoznatljivosti i profesionalnosti brenda.</li>
                    <li>Pravilno odabrana tipografija može izraziti različite emocije i tonalitete, primjerice ozbiljnost, veselje, modernost, eleganciju ili tradiciju</li>
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
                        <DividerH />
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
                            <Link href="https://www.youtube.com/watch?v=bXpiXEV-XNo" target="_blank">Typo (Link)</Link>
                        </div>
                    </div>
                    <DividerH />
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

                    <DividerH />
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