'use client';
import React from "react";
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <>
            <footer className="bg-blue-900">
                <div className="flex flex-row justify-between x-auto w-full p-4 py-6 lg:py-8">

                    <div className="flex flex-col items-start h-full">
                        <span className="text-xs text-white">Re-designed and Developed by</span>
                        <span className="text-xs text-white">
                            <Link 
                                href="https://www.linkedin.com/in/alsellappan" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="underline hover:text-gray-300"
                            >
                                Alagappan Sellappan
                            </Link>
                            {' '} {/* Ensures space before "and" */}
                            (CruX @ UCLA) and{' '}
                            <Link 
                                href="https://www.linkedin.com/in/anushamadapura/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="underline hover:text-gray-300"
                            >
                                Anusha Madapura
                            </Link>
                            {' '} (NeuroTech @ USC)
                        </span>
                    </div>

                    <div className="flex flex-row justify-between">
                        
                        <Link href="https://www.linkedin.com/company/california-neurotechnology-conference/">
                            <button className="flex px-4 flex-col items-center text-xs text-white">
                                <LinkedInIcon/>
                                LinkedIn
                            </button>
                        </Link>

                        <Link href={`mailto:conference2024@caneurotech.com`}>
                            <button className="flex px-4 flex-col items-center text-xs text-white">
                                <EmailIcon/>
                                Email
                            </button>
                        </Link>

                        <Link href="https://www.instagram.com/neurotechconference?igsh=ZDE1MWVjZGVmZQ==">
                            <button className="flex px-4 flex-col items-center text-xs text-white">
                                <InstagramIcon/>
                                Instagram
                            </button>
                        </Link>

                    </div>
                </div>
            </footer>
        </>
    )
}
