import { randomFood } from './api'
import { useQuery } from '@tanstack/react-query'
import { PiSpinnerBold } from "react-icons/pi";

export default function RandomMeal(){
    const { data, isLoading, isError, error } = useQuery({
            queryKey: ['randomFood'],
            queryFn: randomFood
        }
    )

    if(isLoading){
        return  <div className="flex flex-col items-center justify-center">
                    <PiSpinnerBold className="h-8 w-8 animate-spin" />
                </div>
    }

    if(isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="w-96 h-96 ">
            {data.meals.map((data)=>{
                return <div key={data.idMeal} style={{margin: '10px'}} className='h-70 '>
                    <img src={data.strMealThumb} alt={data.strMealThumb} className='h-64 w-96 rounded-2xl'/>
                    <h3 className="font-bold">{data.strMeal}</h3>
                    <p className="text-gray-500">Simplified for learning purposes. Kept super short and simple</p>
                </div>
            })}
        </div>
    )
}