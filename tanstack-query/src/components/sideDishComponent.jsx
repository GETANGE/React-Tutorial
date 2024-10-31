import { useQuery } from "@tanstack/react-query";
import { foodCategories } from "./api";

export default function SideDish(){
    const { data } = useQuery({
        queryKey: ['sideDish'],
        queryFn: foodCategories
    })

    if(!data){
        return <div>No data is rendered</div>
    }

    return(
        <div className="flex gap-3 mr-1 p-1.5">
            {data.categories.slice(0,3).map((data) => {
                return (
                    <div key={data.idCategory} className="bg-slate-100 w-4/12 rounded-2xl mr-3 p-3.5">
                        <img src={data.strCategoryThumb} alt={data.strCategoryThumb} className="w-full rounded-md mb-2" />
                        <h4 className="text-center mb-1 font-bold">{data.strCategory}</h4>
                        <p className="text-gray-500 mb-3">Chicken is a type of domesticated fowl, a subspecies of the red junglefowl.</p>
                        <button type="button" className="w-60 border-solid border text-green-600 rounded-1xl px-4 py-2  border-green-700">
                            Select
                        </button>
                    </div>
                );
            })}
        </div>
    )
}