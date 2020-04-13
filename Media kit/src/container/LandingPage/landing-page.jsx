import React from 'react';

import { StyledContainer } from './landing-page.styles';

import NavbarMain from '../../components/navbar/navbar';
// import ControlledCarousel from '../../components/carousel/carousel';
import AuthorsSection from '../../components/authors-section/authors-section';
import UserDevicesSection from '../../components/users-devices-section/users-devices-section';
import Footer from '../../components/footer/footer';

const LandingPage = () => (
  <StyledContainer>
    <NavbarMain />
    {/* <ControlledCarousel /> */}
    <AuthorsSection />
    <UserDevicesSection />
    <Footer />
  </StyledContainer>
);

export default LandingPage;