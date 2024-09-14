'use client';
import { BorderBeam } from '@/components/magicui/border-beam';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function LogoCard() {
    const { theme } = useTheme();

    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Ve
            </span> */}

            {theme === 'light' ? (
                <Image src="/logos/ve_technologies_light_mode.png" width={500} height={500} alt="Ve Light Mode Logo" />
            ) : (
                <Image src="/logos/ve_technologies_dark_mode.png" width={500} height={500} alt="Ve Dark Mode Logo" />
            )}

            <BorderBeam size={250} duration={12} delay={9} />
        </div>
    );
}
