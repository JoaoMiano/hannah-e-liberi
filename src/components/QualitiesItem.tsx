const QualitiesItem = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <div className="flex gap-4 group">
            <div className="w-12 h-12 p-2.5 bg-primary/8 rounded-xl text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-lg text-primary mb-0.5">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

export default QualitiesItem
