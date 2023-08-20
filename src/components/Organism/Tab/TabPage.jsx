import React, { useEffect, useState } from 'react';
import Tab from './Tab';
import Table from '../Table/Table';
import tab_jsx from './Code/tab_jsx.txt';
import tab_scss from './Code/tab_scss.txt';
import { Title, Paragraf } from '../../Atoms/Typography/Typography';


const TabPage = () => {
    const [JSXfileContent, setFileContent] = useState('');
    const [SCSSfileContent, setSecondTabContent] = useState('');
 
    useEffect(() => {
        fetchTextContent(tab_jsx, setFileContent);
        fetchTextContent(tab_scss, setSecondTabContent);
    }, []);
 
    const fetchTextContent = (url, setContent) => {
        fetch(url)
          .then((response) => response.text())
          .then((content) => setContent(content))
          .catch((error) => console.log(error));
    };
    
    const tableHeaders = ['Svojtsvo', 'Opis', 'Vrsta', 'Zadano'];
    const tableConent = [
        { cell1: 'options', cell2: 'Popis opcija tabova koje će se prikazati', cell3: 'array', cell4: 'options_2' },
        { cell1: 'content', cell2: 'Popis sadržaja koji će se prikazati za svaki tab', cell3: 'array', cell4: 'tabContent' },
    ];
    const tabHeaders_1 = ['Tab 1', 'Tab 2', 'Tab 3'];
    const tabHeaders_2 = [' - ', 'JSX', 'SCSS'];
    const tabContent_2 = [
        ' - ',
        JSXfileContent,
        SCSSfileContent,
    ];
    const tabContent_1 = [
        <React.Fragment>
            <Title level={4} color="neutral-700">Chupa chups danish jujubes</Title>
            <Paragraf>Chocolate bar jelly-o bear claw jujubes cookie. Cupcake macaroon pudding tiramisu lollipop cookie croissant icing donut. Chocolate cotton candy pastry gummies toffee marzipan. Chocolate pudding cotton candy tiramisu sesame snaps macaroon wafer gummies. Dragée chocolate biscuit sesame snaps pie donut muffin. Carrot cake bonbon lollipop donut croissant dragée icing macaroon caramels.</Paragraf>
        </React.Fragment>,
        <React.Fragment>
            <Title level={4} color="neutral-700">Cotton candy chocolate cookie</Title>
            <Paragraf>Donut chocolate bar danish cotton candy pudding shortbread. Jujubes soufflé bonbon chocolate lollipop. Icing tart sugar plum jelly-o carrot cake cake liquorice. Liquorice chupa chups soufflé bear claw candy wafer. Oat cake tiramisu chupa chups biscuit croissant lemon drops icing tootsie roll. Danish cake oat cake candy cotton candy dragée brownie sweet.</Paragraf>
        </React.Fragment>,
        <React.Fragment>
            <Title level={4} color="neutral-700">Sweet cookie dragée brownie</Title>
            <Paragraf>Powder candy gingerbread candy jelly beans. Tiramisu toffee sesame snaps tiramisu croissant pie danish. Lemon drops sweet roll chocolate cake pudding soufflé donut lollipop icing chocolate. Tiramisu carrot cake chupa chups ice cream chocolate candy canes. Lemon drops brownie halvah jelly-o halvah gummies. Chocolate fruitcake caramels chocolate bar dragée jelly cookie. Shortbread candy canes gummies oat cake chocolate bar wafer sweet roll gummies.</Paragraf>
        </React.Fragment>
    ];
 
    return (
        <div className="modular-page-structure">
            <article>
                <h2>Tab</h2>
                <p>Olakšavaju prebacivanje između različitih prikaza. Tab komponentu možete koristiti unutar vaše React aplikacije, posebno ako želite organizirati sadržaj na više tabova. Može se koristiti na različitim stranicama, modulima ili dijelovima aplikacije gdje je potrebno prikazati više sadržaja grupiranih u tabove.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Kada želite prikazati više tabova s različitim sadržajem</li>
                </ul>
            </article>
 
            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="column">
                            <Tab options={tabHeaders_1} content={tabContent_1}/>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="padding col-12-lg">
 
                        <div className="code-container">
                            <Tab options={tabHeaders_2} content={tabContent_2} />
                        </div>
 
                    </div>
                </div>
            </div>
 
            {/* Table */}
            <Table data={tableConent} headers={tableHeaders}/>
        </div>
    );
};
 
export default TabPage;