import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import GoalsSection from '@/components/home/GoalsSection';
import ActivitiesSection from '@/components/home/ActivitiesSection';
import NewsSection from '@/components/home/NewsSection';
import ContactSection from '@/components/home/ContactSection';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>جمعية سعيد العلمية - تعزيز التعليم المستدام</title>
        <meta name="description" content="جمعية سعيد العلمية تسعى لتعزيز التعليم المستدام وبناء مجتمع واعٍ قائم على المعرفة من خلال مبادرات تعليمية مبتكرة وشراكات استراتيجية." />
      </Helmet>
      
      <main className="min-h-screen bg-white">
        <HeroSection />
        <AboutSection />
        <GoalsSection />
        <ActivitiesSection />
        {/* <NewsSection /> */}
        <ContactSection />
      </main>
    </>
  );
}

export default HomePage;