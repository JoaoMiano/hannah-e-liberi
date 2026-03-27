import { cn } from "@/lib/utils";

export type SocialAppType = {
    href: string;
    icon: React.ComponentType<{ size: number }>;
    label: string;
    className?: string;
};

const SocialLink = ({ href, icon: Icon, label, className }: SocialAppType) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
            "flex items-center justify-center w-14 h-14 rounded-md shadow-sm border border-gray-100 transition-all duration-300 text-white bg-primary hover:bg-primary/70",
            className,
        )}
        aria-label={label}
    >
        <Icon size={30} />
    </a>
);

export default SocialLink;