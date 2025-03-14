import Image from "next/image";

import ntmc from '../../../public/sponsors/ntmc.png';
import ucsdeng from '../../../public/sponsors/ucsd_eng.png';
import ieee from '../../../public/sponsors/ieee.png'
import urh from '../../../public/sponsors/urh.png'
import fanfan from '../../../public/sponsors/fan_fan.png'

export default function Members() {
    const sponsors = [
        { src: ieee, alt: "IEEE EMBS", link: "https://www.embs.org/"},
        { src: ucsdeng, alt: "UCSD Engineering", link: "https://jacobsschool.ucsd.edu/" },
        { src: urh, alt: "UCSD URH", link: "https://ugresearch.ucsd.edu/" },
        { src: ntmc, alt: "NTMC", link:"https://neurotechmicrocreds.com/"},
    ];

    const partners = [
        {src: fanfan, alt: "Fan-Fan", link: "https://fanfangroup.com/"}
    ]

    return (
        <main className="flex flex-col min-h-screen pt-20">
            {/* Sponsors Section */}
            <div className="flex-grow py-10 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-semibold text-center mb-12">Our Sponsors</h2>

                {/* 2x2 Grid Layout */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-8">
                    {sponsors.map((sponsor, index) => (
                        <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                            {/* White rounded box with hover effect */}
                            <div className="bg-white p-6 rounded-xl shadow-lg flex justify-center items-center w-[400px] h-[250px] transition-transform transform hover:scale-105 hover:shadow-2xl">
                                <Image src={sponsor.src} alt={sponsor.alt} className="h-auto w-auto max-h-[120px]" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/*Partners Section */}
            <div className="flex-grow py-10 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-semibold text-center mb-12">Our Partners</h2>

                {/* 2x2 Grid Layout */}
                <div className={`w-full max-w-6xl mx-auto ${partners.length === 1 ? "flex justify-center" : "grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-8"}`}>
                    {partners.map((partner, index) => (
                        <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                            {/* White rounded box with hover effect */}
                            <div className="bg-white p-6 rounded-xl shadow-lg flex justify-center items-center w-[400px] h-[250px] transition-transform transform hover:scale-105 hover:shadow-2xl">
                                <Image src={partner.src} alt={partner.alt} className="h-auto w-auto max-h-[120px]" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </main>
    );
}
