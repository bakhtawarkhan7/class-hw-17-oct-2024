import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">I'm a dedicated frontend developer with a passion for creating seamless and engaging user interfaces. My expertise lies in frameworks like Next.js and React, where I focus on translating designs into responsive, accessible, and high-performance code. I collaborate closely with designers and backend teams to ensure smooth project delivery. I value attention to detail and continuously update my skills to keep up with the latest in frontend technology</p>
        </section>
        <section id="portfolio" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <p className="text-lg text-gray-700">Check out some of my latest work.</p>
          <ul className="list-disc ml-6">
            <li><a href="https://github.com/bakhtawarkhan7/class-hw" target="_blank" rel="noopener noreferrer">Project 1</a></li>
            <li><a href="https://github.com/bakhtawarkhan7/class-hw-10-oct-2024" target="_blank" rel="noopener noreferrer">Project 2</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
