export default function TopMeal() {
    const data =[
        {id: 1, name: "Meatball", price: 450},
        {id: 2, name: "Chicken Fried Steak", price: 500},
        {id: 3, name: "Beef Stroganoff", price: 550},
        {id: 4, name: "Lasagna", price: 400},
        {id: 5, name: "Spaghetti Carbonara", price: 470}
    ]

    return (
        <div className="bg-green-700 w-2/6 h-96 rounded-2xl p-4">
            <h3 className="text-white mb-4 font-bold">Top 5 Meals</h3>
            <div className="text-white space-y-4">
                <p className="text-slate-300">This week</p>
                {data.map((data)=>{
                    return <ul key={data.id}>
                                <li className="flex justify-between">
                                    <span>{data.name}</span>
                                    <span>Ksh. {data.price}</span>
                                </li>
                            </ul>
                })}
            </div>
        </div>
    );
}
