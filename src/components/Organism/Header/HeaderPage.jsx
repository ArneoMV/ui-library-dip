import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Title, Paragraf } from '../../Atoms/Typography/Typography';

const HeaderPage = () => {

  return (
    <div className="modular-page-structure">
        <article className="col-10-lg">
            <Title level={2} color="neutral-700">Zaglavlje</Title>
            <Paragraf>Zaglavlje (Header) je organ smješten na vrhu web stranice i predstavlja vizualni element koji omogućuje korisnicima brz i lagan pristup ključnim informacijama i funkcionalnostima unutar web aplikacije ili stranice.</Paragraf>
            <Title level={5} color="neutral-700">Kada se koristi</Title>
            <ul>
                <li>Logotip i Navigacija: Zaglavlje obično sadržava logotip, navigacijske poveznice i akcijske gumbe te druge relevantne komponente.</li>
                <li>Dosljedan Izgled: Funkcija ovog organa je osigurati dosljedan izgled i pružiti ključne informacije na svim stranicama web mjesta.</li>
                <li>Praktičnost i Pristup: Zaglavlje se koristi na svakoj pojedinačnoj stranici unutar web mjesta, omogućujući korisnicima jednostavan pristup ključnim dijelovima web mjesta.</li>
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