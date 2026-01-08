const QualitiesItem = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <div className="flex gap-3">
            <div className="w-14 h-14 p-2 bg-chart-1 rounded-md text-primary flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-lg text-primary mb-1">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>

        </div>
    )
}

export default QualitiesItem