import React, { useEffect, useState } from 'react';

import Footer from './Footer';

const FooterPage = () => {

  return (
    <div className="modular-page-structure">
            <article>
                <h2>Podnožje</h2>
                <p>Komponenta Podnožje poznata kao i Footer koristi se na svakoj stranici web mjesta kako bi pružila dodatne informacije, poveznice i akcijske elemente korisnicima. Nalazi se na dnu web stranice i prisutan je na svim dijelovima web mjesta kako bi osigurao dosljedan prikaz i pristup informacijama.</p>
                
                <p>Funkcija komponente jest osigurati dosljedan izgled i pružiti ključne informacije na 
                    svim stranicama web mjesta. Na taj način, korisnici mogu jednostavno i bez poteškoća 
                    pristupiti ključnim dijelovima web mjesta.</p>

                <h3>Kada ga koristiti</h3>
                <p>Koristi se kako bi se korisnicima pružila dodatna podrška, informacije i akcijski elementi na dnu svake stranice web mjesta. Ona igra ključnu ulogu u poboljšanju korisničkog iskustva, olakšava navigaciju i pristup dodatnim sadržajima.</p>
                <ul>
                    <li>Dodatne Informacije: Pruža korisnicima dodatne informacije kao što su kontaktne informacije, uvjeti korištenja, pravila privatnosti i druge relevantne informacije.</li>
                    <li>Povezivanje Funkcionalnosti: Akcijski elementi, kao što su gumbi ili ikone, mogu biti povezani s odgovarajućim funkcionalnostima, kao što su prijave, registracije ili preusmjeravanja na druge dijelove web mjesta.</li>
                    <li>Povezivanje Funkcionalnosti: Akcijski elementi, kao što su gumbi ili ikone, mogu biti povezani s odgovarajućim funkcionalnostima, kao što su prijave, registracije ili preusmjeravanja na druge dijelove web mjesta.</li>
                </ul>
            </article>
            {/* Primjeri */}
            <div className="example-section column">
 
                <div className="column">
                    <div className="padding">
                        <Footer />
                    </div>
                </div>
            </div>

    </div>
  );
};

export default FooterPage;