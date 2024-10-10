'use client';
import Marquee from '@/components/ui/marquee';
import Link from 'next/link';

// TODO update this to use links with the Logos for the user to click
const backedByLogoList = [
    '/logos/google_logo.png',
    '/logos/finc_horiz_logo.png',
    '/logos/antler_logo.png',
    '/logos/the_xx_logo.jpg',
    '/logos/all_in_logo.png',
    '/logos/google_for_startups_logo_white.png',
    '/logos/loi_primary_logo.png',
    '/logos/ms_logo.jpg',
    '/logos/first_row_partners.jpg',
    '/logos/crosscut_ventures_white_logo.png',
    '/logos/c100_logo.jpeg'
];

export default function SocialProof() {
    return (
        <section id="companies">
            <div className="py-14">
                <div className="container mx-auto px-4 md:px-8">
                    <Link href={'https://vesharma.dev'} target="_blank">
                        <h3 className="text-center text-sm font-semibold text-gray-500">Ve & his startups have been backed by: </h3>
                    </Link>
                    <div className="relative mt-6">
                        <Marquee className="max-w-full [--duration:40s]">
                            {backedByLogoList.map((logo, idx) => (
                                <img key={idx} src={logo} className="h-20 w-30 mx-5" alt={logo} />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
