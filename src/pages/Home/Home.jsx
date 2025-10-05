import React from 'react';
import Banner from './Banner/Banner';
import ServicesSection from './Services/Services';
import HowItWorks from './HowtoWork/HowtoWork';
import ClientLogoMarquee from './clientlogoMarque';

const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <HowItWorks></HowItWorks>
    <ServicesSection></ServicesSection>
    <ClientLogoMarquee></ClientLogoMarquee>
        </div>
    );
};

export default Home;