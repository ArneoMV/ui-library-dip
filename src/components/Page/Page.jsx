import React from 'react';
import './_page.scss';
import Header from '../Organism/Header/Header';
import Form from '../Organism/Form/Form';
import Footer from '../Organism/Footer/Footer';

const Page = () => {
  return (
    <div className='page'>
        <Header />
        <div className='main'>
          <Form />
        </div>
        <Footer />
    </div>
  );
};

export default Page;
