import ShinyButton from '@/components/magicui/shiny-button';
import Link from 'next/link';

export function EmailButton() {
    return (
        <Link href="mailto:ve@vesharma.dev" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
                <ShinyButton text="Email Me" />
            </a>
        </Link>
    );
}
