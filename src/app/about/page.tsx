'use client';

import React from 'react';
import Image from 'next/image';
import Carousel from '../../../components/Carousel';
import about_1 from '../../../public/about_1.jpeg';
import guest_speaker from '../../../public/about_1.jpeg';
import industry_academic_panels from '../../../public/about_2.jpg';
import research_poster from '../../../public/research_poster.png';
import bci_competition from '../../../public/bci_competition.jpg';

export default function About() {
  return (
    <main>
      <div className="md:p-10 md:py-44 py-32">

        {/* Our Mission Section */}
        <div className="md:flex flex-row p-10 md:justify-between items-center bg-gray-200 bg-opacity-50 rounded-3xl shadow-lg p-6 mx-6 md:mx-20">
          <div className='w-2/7'>
            <Image
              src={about_1}
              width={400}
              height={400}
              alt="Logo"
              className="h-auto w-auto shadow-2xl rounded-lg"
            />
          </div>
          <div className='w-3/4 pl-10 py-10 md:py-0'>
            <h1 className="text-4xl pb-4">Our Mission</h1>
            <p className="text-lg text-justify mb-4">
              Welcome to the 2025 California Neurotechnology Conference, a distinguished symposium dedicated to advancing neurotechnology research and collaboration. 
              Hosted at UC San Diego, this event engages students, researchers, and professionals in an academic setting that encourages analytical thinking and innovative solutions. 
              Our mission is to cultivate a dynamic community of academic scholars and industry experts, dedicated to advancing neurotechnology and driving impactful conversations about the future of the field.
            </p>
            <p className="text-lg text-justify mb-4">
              Join us for an enriching academic experience emphasizing research excellence, collaborative inquiry, and the innovative spirit driving the future of neurotechnology.
              Whether you are seeking to present your work, network with peers and experts, or deepen your knowledge of the field, the 2025 California Neurotechnology Conference is the ideal forum to ignite collaboration and shape the evolving landscape of neurotechnology research.
            </p>
          </div>
        </div>

        {/* Horizontal Line Separator */}
        <hr className="border-t-2 border-gray-400 border-opacity-50 w-3/4 mx-auto my-10" />

        {/* Event Components Section */}
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold">Event Components</h1>
        </div>

        {/* Single Row for Event Components */}
        <div className="flex justify-between items-stretch gap-4 mx-6 md:mx-20">
          {[
            { img: guest_speaker, title: "Distinguished Guest Speakers", desc: "Benefit from presentations by leading academics who will share detailed insights into their current research projects and the latest developments in neurotechnology." },
            { img: industry_academic_panels, title: "Interactive Q&A Sessions", desc: "Engage in structured discussions that bridge the gap between theoretical research and practical applications, offering participants a comprehensive view of current challenges in neurotechnology." },
            { img: industry_academic_panels, title: "Hands-on Workshops", desc: "Enhance practical skills through workshop sessions led by seasoned experts, offering the opportunity to explore innovative research methodologies and learn state-of-the-art techniques." },
            { img: bci_competition, title: "Competitive Presentations and BCI Competition", desc: "Participate in showcases where student clubs and research teams showcase their innovative projects, including a dedicated Brain-Computer Interface (BCI) competition judged by esteemed academic and industry judges." },
            { img: research_poster, title: "Research Poster Sessions", desc: "Explore poster sessions where students present their latest findings, showcasing research across various disciplines." },
          ].map((item, index) => (
            <div key={index} className="bg-gray-200 bg-opacity-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-1/5 h-full">
              <Image
                src={item.img}
                width={120}
                height={120}
                alt={item.title}
                className="h-32 w-32 object-cover rounded-lg shadow-md"
              />
              <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
              <p className="text-sm text-center mt-2">{item.desc}</p> {/* FIXED TEXT ALIGNMENT */}
            </div>
          ))}
        </div>

      </div>

      {/* Speakers and Panelists Section */}
      <div className="flex flex-row justify-center align-baseline mt-2">
        <span className="flex font-outfit text-3xl">
          Speakers and Panelists
        </span>
      </div>
      <div className="p-8">
        <Carousel />
      </div>

      <script async src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
    </main>
  );
}
