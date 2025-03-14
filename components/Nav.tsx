'use client';
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import cntc from "../public/cntc.png";

export default function NavBar() {
    const path = usePathname();

    return (
        <nav className="bg-white fixed top-0 left-0 right-0 z-20 shadow-lg px-6 py-2 w-full mx-auto">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image src={cntc} width={50} height={50} alt="Logo" className="rounded-full" />
                    <span className="text-2xl font-semibold text-blue-800">California Neurotechnology Conference</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <NavItem href="/about" label="About" active={path === "/about"} />
                    <NavItem href="/speakers" label="Speakers" active={path === "/speakers"} />
                    <NavItem href="/event" label="Event" active={path === "/event"} />
                    <NavItem href="/sponsors" label="Sponsors" active={path === "/sponsors"} />
                    <a href = "https://docs.google.com/forms/d/e/1FAIpQLSeRJnrSyoLyabjhnkZgt-DE2OGqMhbgSD21fAvwDvInlMGjCA/viewform?usp=dialog" target = "_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition text-blue-800">
                        Posters
                        </a>
                </div>

                {/* Register Button */}
                <Link 
                    href="https://www.eventbrite.com/e/2025-california-neurotechnology-conference-tickets-1222882617829?aff=oddtdtcreator"
                    className="bg-blue-800 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-600 transition">
                    Register
                </Link>
            </div>
        </nav>
    );
}

// Define TypeScript interface for props
interface NavItemProps {
    href: string;
    label: string;
    active?: boolean;
}

// Navigation Item Component with explicit typing
const NavItem: React.FC<NavItemProps> = ({ href, label, active }) => (
    <Link 
        href={href} 
        className={`hover:text-blue-600 transition ${active ? "text-blue-900 font-bold" : "text-blue-800"}`}>
        {label}
    </Link>
);
