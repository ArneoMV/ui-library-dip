import React, { useEffect, useState } from 'react';

import Header from './Header';

const HeaderPage = () => {

  return (
    <div className="modular-page-structure">
            <article>
                <h2>Zaglavlje</h2>
                <p>Komponenta predstavlja vizualni element smješten na vrhu web stranice. 
                    Svojom prisutnošću omogućuje korisnicima brz i lagan pristup ključnim informacijama i 
                    funkcionalnostima unutar web aplikacije ili stranice. Zaglavlje obično sadržava logotip, 
                    navigacijske poveznice, akcijske gumbe te druge relevantne komponente.</p>
                
                <p>Funkcija komponente jest osigurati dosljedan izgled i pružiti ključne informacije na 
                    svim stranicama web mjesta. Na taj način, korisnici mogu jednostavno i bez poteškoća 
                    pristupiti ključnim dijelovima web mjesta.</p>

                <h3>Kada ga koristiti</h3>
                <ul>
                    <li>Na Svakoj Stranici: koristi se na svakoj pojedinačnoj stranici unutar web mjesta. Ovo osigurava dosljedan izgled i pristup ključnim informacijama na svim dijelovima web mjesta.</li>
                    <li>Mobilne Verzije: U responsivnom dizajnu, komponenta Zaglavlje često se prilagođava različitim veličinama ekrana kako bi omogućila korisnicima jednostavan pristup čak i na mobilnim uređajima.</li>
                </ul>

            </article>

            <h3>Vrste</h3>
            <p>Postoje primarni gumb, zadani gumb, isprekidani gumb, tekstualni gumb i gumb za vezu</p>
            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding col-10-lg">
                        <Header />
                    </div>
                </div>
            </div>

    </div>
  );
};

export default HeaderPage;