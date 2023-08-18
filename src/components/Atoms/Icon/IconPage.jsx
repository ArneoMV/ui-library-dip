import React, { useEffect, useState } from 'react';
import Table from '../../Organism/Table/Table';
import Tab from '../../Organism/Tab/Tab';
import Icon from './Icon';
import './icon.scss';
import codeJsx from './Code/icon_jsx.txt';
import codeScss from './Code/icon_scss.txt';

const IconPage = () => {
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
    const tabHeaders = ['JSX', 'SCSS', ' - '];
    const tabContent = [
        JSXfileContent,
        SCSSfileContent,
        '-'
    ];

    // Table data
    const tableHeaders = ['Svojtsvo', 'Opis', 'Zadano'];
    const tableContent = [
        { cell1: 'name', cell2: 'Naziv ikone koji se koristi za odabir slike', cell4: '-' },
        { cell1: 'width', cell2: 'Širina ikone', cell4: '20px' },
        { cell1: 'height', cell2: 'Visina ikone', cell4: '20px' },
        { cell1: 'color', cell2: 'Boja ikone', cell4: 'neutral-900' }
    ];


    return (
        <div className="modular-page-structure icon">
            <article>
                <h2>Icon</h2>
                <p>Ikone su grafički elementi koji predstavljaju određenu vizualnu ilustraciju ili simbol. 
                    U Reactu, ikone se obično koriste kao zamjene za tekstualne oznake kako bi se poboljšala vizualna privlačnost i prepoznatljivost korisničkog sučelja.</p>
                <ul>
                    <h4>Kada korisiti tab</h4>
                    <li>Zamjenjuju tekstualne oznake radi bolje estetike i jasnoće.</li>
                    <li>Povećavaju prepoznatljivost i privlačnost korisničkog sučelja.</li>
                    <li>Često se koriste u gumbima, navigaciji, upozorenjima i drugim komponentama</li>
                </ul>
                <h3>Vrste</h3>
                <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            </article>

            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-5-lg">
                        <div className="row">
                             {/* Prikaz ikone "icon1" */}
                             <Icon name="arrowDown" />
                             <Icon name="arrowLeftShortFill" />
                             <Icon name="arrowRightShortFill" />
                             <Icon name="arrowUp" />
                             <Icon name="bookmarkCheckFill" />
                             <Icon name="bookmarkPlusFill" />
                             <Icon name="calendarAllFill" />
                             <Icon name="check2" />
                             <Icon name="checkCircleFill" />
                             <Icon name="chevronCompactLeft" />
                             <Icon name="chevronCompactRight" />
                             <Icon name="chevronLeft2" />
                             <Icon name="chevronRight2" />
                             <Icon name="exclamationCircleFill" />
                             <Icon name="exclamationDiamondFill" />
                             <Icon name="forwardFill" />
                             <Icon name="houseFill" />
                             <Icon name="imageFill" />
                             <Icon name="infoCircleFill" />
                             <Icon name="patchCheckFill" />
                             <Icon name="pencilFill" />
                             <Icon name="personFill" />
                             <Icon name="plusCircleFill" />
                             <Icon name="plus" />
                             <Icon name="search" />
                             <Icon name="threeDotsVertical" />
                             <Icon name="threeDots" />
                             <Icon name="xCircleFill" />
                             <Icon name="x" />
                            
                            {/* Prikaz ikone "icon2" s drugačijom bojom */}
                            {/* <Icon name="icon2" color="red" /> */}
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
            <Table data={tableContent} headers={tableHeaders}/>
        </div>
    );
};

export default IconPage;