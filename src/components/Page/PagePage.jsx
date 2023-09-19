import React, { useEffect, useState } from 'react';
import { Title, Paragraf } from '../Atoms/Typography/Typography';
import Page from './Page';

const PagePage = () => {

  return (
    <div className="modular-page-structure">
      <article className="col-10-lg">
          <Title level={2} color="neutral-700">Stranica</Title>
          <Paragraf>Stranica predstavlja konkretan primjerak unutar web aplikacije koji koristi predložak za strukturiranje i prikazivanje određenog sadržaja. Svaka stranica predstavlja jedinstveno mjesto gdje korisnik može interagirati s definiranim informacijama, uslugama ili funkcionalnostima aplikacije.</Paragraf>
          <Title level={5} color="neutral-700">Primjena</Title>
          <Paragraf>Stvaranje nove stranice zahtijeva definiranje specifičnog sadržaja koji će biti prikazan, zajedno s odgovarajućim komponentama. Nakon toga, odabire se prikladan predložak koji će poslužiti kao osnova za strukturiranje stranice. Sadržaj stranice se integriše s predloškom kako bi se postigao željeni vizualni i funkcionalni aspekt. Stranice služe za grupiranje povezanih informacija ili funkcionalnosti unutar korisničkog sučelja, omogućujući korisnicima navigaciju i interakciju s različitim dijelovima aplikacije.</Paragraf>
      </article>
      {/* Primjeri */}
      <div className="example-section column">

          <div className="column">
              <div className="padding">
                  <Page />
              </div>
          </div>
      </div>
    </div>
  );
};

export default PagePage;