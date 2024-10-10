import IconCloud from '@/components/magicui/icon-cloud';

const slugs = [
    'typescript',
    'javascript',
    'python',
    'react',
    'posthog',
    'chakraui',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'amazonaws',
    'postgresql',
    'firebase',
    'bun',
    'vercel',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'kubernetes',
    'git',
    'terraform',
    'linear',
    'github',
    'gitlab',
    'visualstudiocode',
    'amazonecs',
    'amazonec2',
    'huggingface',
    'google',
    'googlecloud',
    'googlecloudstorage',
    'googlepubsub'
];

export function SkillsCloud() {
    return (
        <div className="relative flex h-full w-full max-w-[38rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
