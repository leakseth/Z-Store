import React from 'react';
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Offer from '../components/Offer';
import NewCollection from '../components/NewCollection';
import ContactPage from '../components/ContactPage';

function Mainpage() {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection/>
      <ContactPage/>
    </>
  );
}

export default Mainpage;
