import React, { useEffect, useState } from 'react';

import Tamplate from './Tamplate';

const TamplatePage = () => {

  return (
    <div className="modular-page-structure">
            <article>
                <h2>Predložak</h2>
                <p>Predložak je temeljna struktura koja služi za organizaciju i raspored komponenata unutar web aplikacije. To predstavlja okvir koji uključuje konzistentne elemente kao što su zaglavlje, podnožje, navigacija te ostali sastavni dijelovi koji se pojavljuju na svakoj pojedinoj stranici ili sekciji unutar aplikacije.</p>

                <h3>Primjena</h3>
                <p>Predložak se kreira definiranjem temeljnih elemenata i organizacije komponenata. Nakon kreiranja, primjenjuje se na različite stranice ili sekcije unutar aplikacije. Stranice koriste predložak kao okvir za postavljanje sadržaja. Kroz primjenu predloška, osigurava se dosljedan izgled i raspored komponenata, dok se individualne stranice oblikuju dodavanjem specifičnih komponenti i sadržaja kako bi se postigla potrebna funkcionalnost.</p>
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