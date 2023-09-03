import React, { useEffect, useState } from 'react';

import Footer from './Footer';

const FooterPage = () => {

  return (
    <div className="modular-page-structure">
            <article>
                <h2>Podnožje</h2>
                <p>Podnožje (Footer) je organ koji se nalazi na dnu web stranice i služi za pružanje dodatnih informacija, poveznica i akcijskih elemenata korisnicima. Ovaj organ osigurava dosljedan prikaz i pristup informacijama na svim dijelovima web stranice.</p>
                
                <p>Funkcija komponente jest osigurati dosljedan izgled i pružiti ključne informacije na 
                    svim stranicama web mjesta. Na taj način, korisnici mogu jednostavno i bez poteškoća 
                    pristupiti ključnim dijelovima web mjesta.</p>

                <h3>Kada ga koristiti</h3>
                <ul>
                    <li>Dodatne Informacije: Podnožje pruža korisnicima dodatne informacije kao što su kontaktne informacije, uvjeti korištenja, pravila privatnosti i druge relevantne informacije.</li>
                    <li>Povezivanje Funkcionalnosti: Akcijski elementi, kao što su gumbi ili ikone, često su povezani s odgovarajućim funkcionalnostima, kao što su prijave, registracije ili preusmjeravanja na druge dijelove web stranice.</li>
                    <li>Dosljednost i Pristup: Organ osigurava dosljedan izgled i pristup ključnim informacijama na svim stranicama web mjesta, čime se poboljšava korisničko iskustvo.</li>
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