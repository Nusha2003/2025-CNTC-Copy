import Image from "next/image";

import uclabri from '../../../public/sponsors/bri-removebg-preview.png';
import davisne from '../../../public/sponsors/davis_neuroeng.png';
import careai from '../../../public/sponsors/careai.png';
import mbraintrain from '../../../public/sponsors/mbraintrain.png';
import uclatnt from '../../../public/sponsors/ucla_tnt.png';
import ntmc from '../../../public/sponsors/ntmc.png';
import ucsdeng from '../../../public/sponsors/ucsd_eng.png';

export default function Members() {
    const sponsors = [
        { src: ucsdeng, alt: "UCSD Engineering", link: "https://jacobsschool.ucsd.edu/" },
        { src: davisne, alt: "Davis Neuroengineering", link: "https://neuroengineering.ucdavis.edu/" },
        { src: careai, alt: "Care AI", link: "https://www.care.ai/" },
        { src: mbraintrain, alt: "mBrainTrain", link: "https://mbraintrain.com/" },
        { src: uclatnt, alt: "UCLA TNT", link: "https://www.neurosurgery.ucla.edu/tnt" },
        { src: ntmc, alt: "NTMC", link: "https://www.ntmc.org/" },
        { src: uclabri, alt: "UCLA BRI", link: "https://www.bri.ucla.edu/" }
    ]; 

    return (
        <main className="flex flex-col min-h-screen">
            {/* Sponsors Section */}
            <div className="flex-grow py-10 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-semibold text-center mb-12">Our Sponsors</h2>

                {/* Conditional Grid Layout */}
                <div className={`w-full max-w-6xl mx-auto 
                    ${sponsors.length === 1 ? "flex justify-center" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"}
                `}>
                    {sponsors.map((sponsor, index) => (
                        <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                            {/* White rounded box with hover effect */}
                            <div className="bg-white p-6 rounded-xl shadow-lg flex justify-center items-center w-[250px] h-[150px] transition-transform transform hover:scale-105 hover:shadow-2xl">
                                <Image src={sponsor.src} alt={sponsor.alt} className="h-auto w-auto max-h-[120px]" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}
