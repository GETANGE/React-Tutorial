export default function SideDish(){
    const data =[
        {
            idCategory: "1",
            name: 'Dessert', 
            img: "https://www.themealdb.com/images/category/dessert.png",
            description: "Dessert is a course that concludes a meal."
        },
        {
            idCategory: "2",
            name: 'MeatBall', 
            img: "https://www.themealdb.com/images/category/beef.png",
            description: "Beef is the culinary name for meat from cattle."
        },
        {
            idCategory: "3",
            name: 'Seafood', 
            img: "https://www.themealdb.com/images/category/seafood.png",
            description: "Seafood is any form of sea life regarded as food by humans."
        }
    ]

    return(
        <div className="flex gap-3 mr-1 p-1.5">
            {data.map((data) => {
                return (
                    <div key={data.idCategory} className="bg-slate-100 w-7/12 rounded-2xl mr-3 p-3.5">
                        <img src={data.img} alt={data.name} className="w-full rounded-md mb-2" />
                        <h4 className="text-center mb-1 font-bold	">{data.name}</h4>
                        <p className="text-gray-500 mb-3">{data.description}</p>
                        <button type="button" className="w-60 border-solid border text-green-600 rounded-1xl px-4 py-2  border-green-700">
                            Select
                        </button>
                    </div>
                );
            })}
        </div>
    )
}