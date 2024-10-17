import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Starvic Brilliant</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At Starvic Brilliant, our mission is to connect people with the best local businesses and services in their community. We believe in fostering strong local economies and helping small businesses thrive by providing a platform where they can showcase their offerings and connect with potential customers.
        </p>
        <p>
          Our goal is to make it easy for people to discover, evaluate, and engage with local businesses, while also providing valuable tools and resources for business owners to grow their online presence and customer base.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p>
          Starvic Brilliant was founded in 2020 by a group of entrepreneurs who saw the need for a more comprehensive and user-friendly local business directory. Drawing from their experiences in technology, marketing, and small business management, they set out to create a platform that would benefit both consumers and business owners alike.
        </p>
        <p className="mt-4">
          Since our launch, we've grown to serve thousands of businesses and users across multiple cities, constantly innovating and improving our platform based on feedback from our community.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="mb-4">
          We're a diverse group of professionals passionate about local businesses and technology. Our team includes experts in web development, user experience design, digital marketing, and customer support.
        </p>
        <p>
          While we've chosen to keep our team members' profiles private, know that each of us is dedicated to providing the best possible experience for our users and businesses.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">"Starvic Brilliant has been a game-changer for my small business. The exposure I've gained has brought in so many new customers!"</p>
            <p className="font-semibold">- Sarah J., Owner of Bloom Florist</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">"I love how easy it is to find and compare local services on Starvic Brilliant. It's become my go-to resource for everything local."</p>
            <p className="font-semibold">- Michael T., Starvic Brilliant User</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;