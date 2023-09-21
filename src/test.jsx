
https://www.npmjs.com/package/metro-ui-components

https://arneomv.github.io/ui-library-dip/

npm install -g sass

import React, { useEffect, useState } from 'react';
import { Header, Footer, Form  } from 'metro-ui-components';
import './style.css';

function App() {
  return (
    <div className='page'>
        <Header />
        <div className='main'>
          <Form />
        </div>
        <Footer />
    </div>
  );
}

export default App;