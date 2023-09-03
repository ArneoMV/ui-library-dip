import React from 'react';
import './_tamplate.scss';
import Header from '../Organism/Header/Header';
import Form from '../Organism/Form/Form';
import Footer from '../Organism/Footer/Footer';

const Tamplate = () => {
  return (
    <div className='tamplate'>
        <Header />
        <div className='main'>
          <Form />
        </div>
        <Footer />
    </div>
  );
};

export default Tamplate;
