type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const AdvantagesService = ({ title, description, icon }: Props) => {
    return (
        <div className="flex gap-2 items-start ">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-white">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-primary">{title}</h4>
                <p className="text-gray-600 text-sm mt-2">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AdvantagesService;