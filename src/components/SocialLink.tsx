export type SocialAppType = {
    href: string;
    icon: React.ComponentType<{ size: number }>;
    label: string;
    color?: string;
};

const SocialLink = (SocialApp: SocialAppType) => (
    <a
        href={SocialApp.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
            flex items-center justify-center w-14 h-14 rounded-md shadow-sm border border-gray-100 transition-all duration-300 text-white
            ${SocialApp.color ? `bg-${SocialApp.color} ` : 'bg-primary hover:bg-secondary '}
            `}
        aria-label={SocialApp.label}
    >
        <SocialApp.icon size={30} />
    </a>
);

export default SocialLink;