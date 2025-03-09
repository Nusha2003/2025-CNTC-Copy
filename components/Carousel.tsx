import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Image from 'next/image';

import Arash_Adami from '../public/Arash_Adami.jpg';
import Philip_Sabes from '../public/Philip_Sabes.jpg';
import JoJo_Platt from '../public/JoJo_Platt.jpg';
import Gert_Cauwenberghs from '../public/Gert_Cauwenberghs.png';
import Spero_Koulouras from '../public/Spero_Koulouras.png';

export default function CarouselComponent() {
  const speakers = [
    { image: Arash_Adami, name: "Arash Adami" },
    { image: Philip_Sabes, name: "Dr. Philip Sabes" },
    { image: JoJo_Platt, name: "JoJo Platt" },
    { image: Gert_Cauwenberghs, name: "Professor Gert Cauwenberghs" },
    { image: Spero_Koulouras, name: "Spero Koulouras" },
  ];

  return (
    <Carousel 
      show={3} 
      slide={1} 
      transition={0.5} 
      infinite={true} 
      useArrowKeys={true} 
      autoSwipe={2000} 
      swiping={true} 
      responsive={true}
    >
      {speakers.map((speaker, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          {/* Image container to enforce circular shape */}
          <div className="w-40 h-40 rounded-full overflow-hidden flex justify-center items-center border-4 border-gray-300">
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          {/* Speaker Name */}
          <p className="mt-2 font-semibold">{speaker.name}</p>
        </div>
      ))}
    </Carousel>
  );
}
