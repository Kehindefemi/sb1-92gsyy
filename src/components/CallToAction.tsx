import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Own a Business? Get Listed on Starvic Brilliant Today!</h2>
      <p className="mb-6">Join our growing community of local businesses and reach more customers.</p>
      <Link
        to="/add-business"
        className="inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
      >
        Add Your Business
      </Link>
    </section>
  );
};

export default CallToAction;