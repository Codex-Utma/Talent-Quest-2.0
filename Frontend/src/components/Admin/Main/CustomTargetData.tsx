interface CustomTargetDataProps {
    stat: {
        icon: string;
        label: string;
        value: number | string;
    };
}

export default function CustomTargetData({stat}: CustomTargetDataProps) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5 flex items-center">
                <i className={`${stat.icon} text-custom text-3xl`}></i>
                <div className="ml-5 flex-1">
                    <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                        <dd className="text-lg font-semibold text-gray-900">{!isNaN(Number(stat.value)) ? stat.value : 0}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
