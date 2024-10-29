import { randomFood } from './api'
import { useQuery } from '@tanstack/react-query'

export default function RandomMeal(){
    const { data } = useQuery({
            queryKey: ['randomFood'],
            queryFn: randomFood
        }
    )

    if(!data){
        return <div> No data is rendered</div>
    }

    return (
        <div className="w-96 h-96 ">
            {data.meals.map((data)=>{
                return <div key={data.idMeal} style={{margin: '10px'}} className='h-70 '>
                    <img src={data.strMealThumb} alt={data.strMealThumb} className='h-64 w-96'/>
                    <h3 className="font-bold">{data.strMeal}</h3>
                    <p className="text-gray-500">Simplified for learning purposes. Kept super short and simple</p>
                </div>
            })}
        </div>
    )
}