'use client';
import Image from 'next/image';

export default function Speakers() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#062a74]">
        <h1 className="text-4xl font-bold text-white mt-40">Our Speakers</h1>
  
        {/* Grid Layout for Speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14 px-4">
          {/* Speaker 1 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-72 h-[290px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/Philip_Sabes.jpg" // ✅ Correct path from /public/
            alt="Philip Sabes"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
            <h2 className="mt-6 text-xl font-semibold">Dr. Philip Sabes</h2>
            <p className="text-sm text-gray-500">Cofounder of Neuralink, Starfish Neuroscience, Integral, Professor Emeritus @ UCSF</p>
          </div>
  
          {/* Speaker 2 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-72 h-[290px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/Spero_Koulouras.png" // ✅ Correct path from /public/
            alt="Spero Koulouras"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
            <h2 className="mt-5 text-xl font-semibold">Spero Koulouras</h2>
            <p className="text-sm text-gray-500">Founder, Autonomous Living Technologies</p>
          </div>
  
          {/* Speaker 3 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-72 h-[290px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/Gert_Cauwenberghs.png" // ✅ Correct path from /public/
            alt="Spero Koulouras"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
            <h2 className="mt-5 text-xl font-semibold">Dr. Gert Cauwenberghs</h2>
            <p className="text-sm text-gray-500">Professor of Bioengineering @ UCSD, Co-Director of Institute for Neural Computation</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-72 h-[290px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/Spero_Koulouras.png" // ✅ Correct path from /public/
            alt="Spero Koulouras"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
            <h2 className="mt-8 text-xl font-semibold">Dr. Erika Ross Ellison</h2>
            <p className="text-sm text-gray-500">Lead Researcher at XYZ Lab</p>
          </div>
  
        </div>
        {/* Grid Layout for Speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14 mb-14 px-4">
          {/* Speaker 1 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-72 h-[290px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/Albert_Rizzo.jpg" // ✅ Correct path from /public/
            alt="Albert Rizzo"
            width={128}
            height={128}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
            <h2 className="mt-8 text-xl font-semibold">Dr. Albert Rizzo</h2>
            <p className="text-sm text-gray-500">CEO at Tech Company</p>
          </div>
  
          {/* Speaker 2 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-72 h-[290px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/JoJo_Platt.jpg" // ✅ Correct path from /public/
            alt=""
            width={200}
            height={200}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
            <h2 className="mt-8 text-xl font-semibold">JoJo Platt</h2>
            <p className="text-sm text-gray-500">Professor at University</p>
          </div>
  
          {/* Speaker 3 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-72 h-[290px] sm:h-[350px] md:h-[400px]">
          <Image
            src="/Arash_Adami.jpg" // ✅ Correct path from /public/
            alt="Arash Adami"
            width={200}
            height={200}
            className="rounded-full w-48 h-48 object-cover mt-8 mb-4"
          />
            <h2 className="mt-8 text-xl font-semibold">Dr. Arash Adami</h2>
            <p className="text-sm text-gray-500">Lead Researcher at XYZ Lab</p>
          </div>

          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 w-72 h-[290px] sm:h-[350px] md:h-[400px]">
            <img
              src="https://via.placeholder.com/150"
              alt="Speaker 3"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <h2 className="mt-60 text-xl font-semibold">Ruthie Forney</h2>
            <p className="text-sm text-gray-500">Lead Researcher at XYZ Lab</p>
          </div>
  
        </div>
      </main>
    );
  }
  
  
