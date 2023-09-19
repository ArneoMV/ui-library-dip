import React, { useEffect, useState } from 'react';

import Tamplate from './Tamplate';
import { Title, Paragraf } from '../Atoms/Typography/Typography';

const TamplatePage = () => {

  return (
    <div className="modular-page-structure">
      <article className="col-10-lg">
            <Title level={2} color="neutral-700">Predložak</Title>
            <Paragraf>Predložak je temeljna struktura koja služi za organizaciju i raspored komponenata unutar web aplikacije. To predstavlja okvir koji uključuje konzistentne elemente kao što su zaglavlje, podnožje, navigacija te ostali sastavni dijelovi koji se pojavljuju na svakoj pojedinoj stranici ili sekciji unutar aplikacije.</Paragraf>
            <Title level={5} color="neutral-700">Primjena:</Title>
            <Paragraf>Predložak se kreira definiranjem temeljnih elemenata i organizacije komponenata. Nakon kreiranja, primjenjuje se na različite stranice ili sekcije unutar aplikacije. Stranice koriste predložak kao okvir za postavljanje sadržaja. Kroz primjenu predloška, osigurava se dosljedan izgled i raspored komponenata, dok se individualne stranice oblikuju dodavanjem specifičnih komponenti i sadržaja kako bi se postigla potrebna funkcionalnost.</Paragraf>
          
      </article>
      {/* Primjeri */}
      <div className="example-section column">

          <div className="column">
              <div className="padding">
                  <Tamplate />
              </div>
          </div>
      </div>
    </div>
  );
};

export default TamplatePage;