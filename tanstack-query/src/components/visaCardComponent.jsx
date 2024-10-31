import { useQuery } from '@tanstack/react-query';
import { CgMenuRight } from 'react-icons/cg';
import { PiSpinnerBold } from "react-icons/pi";
import Map from './googleMap'; 
import {foodCategories} from './api'; 
export default function VerticalNav() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['todaysMenu'],
        queryFn: foodCategories,
    });

    if (isLoading) {
            return  <div className="flex flex-col items-center justify-center">
                        <PiSpinnerBold className="h-8 w-8 animate-spin" />
                    </div>
    }

    if(isError){
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="px-2.5">
            <CgMenuRight className="menu-icon" size={30} /> <br/><br/>
            <h1 className="font-bold text-2xl">Next Order</h1><br/>
            <div className="bg-green-600 px-7 h-40 rounded-2xl grid gap-y-3">
                <p className="text-white text-2xl mt-3.5 font-bold italic">4455 3322 5566 6789</p>
                <div className="flex justify-between text-white">
                    <p>Elizabeth Moss</p>
                    <p className="font-bold italic">VISA</p>
                </div>
            </div> <br/>

            <div>
                <div className="flex justify-between gap-y-3 px-3">
                    <p className="">Friday</p>
                    <p className="text-gray-500">29/10</p>
                </div> <br/>

                <div>
                    {data.categories.slice(0, 4).map((meal) => (
                        <div key={meal.idCategory} className="flex justify-between gap-y-3">
                            <img src={meal.strCategoryThumb} alt={meal.strCategory} className="w-50 h-20" />
                            <div>
                                <p>{meal.strCategory}</p>
                                <p className="text-gray-500">Ksh. {meal.idCategory + 100}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Map/>
            </div>
        </div>
    );
}
