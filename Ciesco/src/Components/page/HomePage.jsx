import React from 'react'
import { Carausel } from '../Carausel/Carausel';
import { Offers } from '../offers/offers';
import { Step } from '../Steps/Step';
import { CiescoRefer } from '../refer/CiescoRefer';
import { BackPacksProvider } from '../api/context/BackPacksProvider';
import BackPacksList from '../BaggageCart/BackPacks';
import { FooterProvider } from '../api/context/Footer';
import { FooterList } from '../Footer/FooterList';
import { Advetise } from '../Ads/Advetise';
import { BlogCreation } from '../BlogCreation/BlogCreation';
import TestimonialCarousel from '../TestimonialCarousel ';




const HomePage = () => {
  return (
    <>
      <section>
        <Carausel />
      </section>
      <section>
        <Offers />
      </section>
      <section>
        <Step />
      </section>
      <section>
        <CiescoRefer />
      </section>
      <section>
        <BackPacksProvider>
          <BackPacksList />
        </BackPacksProvider>
      </section>
      <section>
        <BlogCreation />
      </section>
      <section>
        <Advetise />
      </section>
      <section>
        <TestimonialCarousel />
      </section>
      <section>
        <FooterProvider>
          <FooterList />
        </FooterProvider>
      </section>
    </>
  );
}

export default HomePage