import React, { useEffect, useState } from 'react';
import { Title, Paragraf, Button, Caption } from '../system/Typography';
import Prism from "prismjs";
import "../../styles/prism.css";
import Table from '../system/Table';
import Tab from '../system/Tab';
import DividerH from '../system/DividerH';
import codeTitle from './codeExamples/typography/title.txt';
import codeParagraf from './codeExamples/typography/paragraf.txt';
import codeStyles from './codeExamples/typography/styles.txt';

const TypographyPage = () => {
    // Tab component
    const [codeTitle, setFileContent] = useState('');
    const [codeParagraf, setSecondTabContent] = useState('');
    const [codeStyles, setThirdTabContent] = useState('');

  
    useEffect(() => {
      fetchTextContent('./codeExamples/typography/title.txt', setFileContent);
      fetchTextContent(codeParagraf, setSecondTabContent);
      fetchTextContent(codeStyles, setThirdTabContent);
    }, []);

    const fetchTextContent = (url, setContent) => {
        fetch(url)
          .then((response) => response.text())
          .then((content) => setContent(content))
          .catch((error) => console.log(error));
    };

    const tabHeaders_1 = ['JSX', ' - '];
    const tabContent_1 = [codeTitle, ' - '];
    const tabHeaders_2 = ['JSX', ' - '];
    const tabContent_2 = [codeParagraf, ' - '];
    const tabHeaders_3 = ['Styles', ' - '];
    const tabContent_3 = [codeStyles, ' - '];

    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableContent = [
        { cell1: 'level', cell2: 'Nivo naslova (H1-H6)', cell3: 'Title', cell4: '-' },
        { cell1: 'color', cell2: 'Boja teksta', cell3: 'string', cell4: 'inherit' },
        { cell1: 'uppercase', cell2: 'Pretvori tekst u velika slova', cell3: 'Title, Paragraf, Button, Caption', cell4: 'false' },
        { cell1: 'lowercase', cell2: 'Pretvori tekst u mala slova', cell3: 'Title, Paragraf, Button, Caption', cell4: 'false' },
        { cell1: 'link', cell2: 'URL za link (samo za Title, Paragraf, Button)', cell3: 'Title, Paragraf, Button', cell4: '-' },
        { cell1: 'size', cell2: 'Veličina fonta (samo za Paragraf)', cell3: 'Paragraf', cell4: 'inherit' },
        { cell1: 'className', cell2: 'Dodatna CSS klasa', cell3: 'Caption', cell4: '-' }, 
    ];


    return (
        <div className="modular-page-structure">
            <article>
                <h2>Typography</h2>
                <p>Osnovni widget za primanje korisničkog unosa je tekstualno polje. Tipkovnica i miš mogu se koristiti za unos ili promjenu podataka.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Potreban je korisnički unos u polje obrasca.</li>
                    <li>Potreban je unos za pretraživanje.</li>
                </ul>
                <h3>Vrste</h3>
                <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            </article>

            {/* Heading */}
            <div className="example-section column">
                <div className="column">
                        <div className="column col-gap-lg padding margin">
                            <Title level={1} color="neutral-700">.h1 Metro Design </Title>
                            <Title level={2} color="neutral-700">.h2 Metro Design </Title>
                            <Title level={3} color="neutral-700">.h3 Metro Design </Title>
                            <Title level={4} color="neutral-700">.h4 Metro Design </Title>
                            <Title level={5} color="neutral-700">.h5 Metro Design </Title>
                            <Title level={6} color="neutral-700">.h6 Metro Design </Title>
                        </div>
                        <DividerH />
                    <div className="padding col-12-lg">
                        <div className="code-container">
                            <Tab options={tabHeaders_1} content={tabContent_1} />
                        </div>
                    </div>
                </div>  
            </div>
             {/* Paragraf */}
            <div className="example-section column">
                <div className="column">
                    <div className="padding padding-top">
                        <div className="column col-gap-lg">
                            <Paragraf size="16px" color="neutral-500">
                                This is a paragraph.
                            </Paragraf>
                            <Paragraf size="16px" color="neutral-500" link="https://example.com">
                                This is a paragraph with a link.
                            </Paragraf>
                            {/* <Button color="neutral-500" uppercase>Click Me</Button>
                            <Caption color="neutral-500">This is a fancy caption</Caption> */}
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

            {/* Style */}
            <div className="example-section column">
               
                <div className="column">
                    <div className="padding padding-top">
                        <div className="column col-gap-lg">
                            <p>Objašnjenje stilova</p>
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



            {/* Table */}
            <Table data={tableContent} headers={tableHeaders}/>
        </div>
    );
};

export default TypographyPage;