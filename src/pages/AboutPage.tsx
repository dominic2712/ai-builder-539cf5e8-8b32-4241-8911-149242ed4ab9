import React from 'react';
import Navigation from '../components/Navigation';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className="mt-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2">This page provides information about our website.</p>
      </div>
    </div>
  );
};

export default AboutPage;