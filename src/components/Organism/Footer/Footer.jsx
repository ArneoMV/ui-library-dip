import React from 'react';
import './_footer.scss';
import Logo from './assets/Logo.svg';
import Button from '../../Molecules/Button/Button';
import { Title } from '../../Atoms/Typography/Typography';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footerContainer'>
        <div className="column">
          <Title level={4} color="align_center-700">Customers</Title>
          <Button type="link">Buyers</Button>
          <Button type="link">Suppliers</Button>
        </div>
        <div className="column ">
        <Title level={4} color="neutral-700">Company</Title>
          <Button type="link">About</Button>
          <Button type="link">Team</Button>
        </div>
        <div className="column">
          <Title level={4} color="neutral-700">Follow Us</Title>
          <div className='row'>
            <Button type="icon" iconName="xTwitter" />
            <Button type="icon" iconName="threads" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
