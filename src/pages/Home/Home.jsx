import React from 'react';
import Banner from './Banner/Banner';
import ServicesSection from './Services/Services';
import HowItWorks from './HowtoWork/HowtoWork';

const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <HowItWorks></HowItWorks>
    <ServicesSection></ServicesSection>
        </div>
    );
};

export default Home;