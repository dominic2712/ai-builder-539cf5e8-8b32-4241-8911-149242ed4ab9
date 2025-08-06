import React from 'react';
import Navigation from '../components/Navigation';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className="mt-4">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-2">This is a simple website with basic CRUD operations.</p>
      </div>
    </div>
  );
};

export default HomePage;