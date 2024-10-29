import { GoBriefcase } from "react-icons/go";

export default function Orders(){
    const orders = [
        {id: 1, name: "Meatball", date: new Date(Date.now()).toISOString().slice(0, 10) ,price: 100},
        {id: 2, name: "Chicken Fried Steak", date: new Date(Date.now()).toISOString().slice(0, 10), price: 150},
        {id: 3, name: "Beef Stroganoff", date: new Date(Date.now()).toISOString().slice(0, 10), price: 200},
        {id: 4, name: "Lasagna",date: new Date(Date.now()).toISOString().slice(0, 10), price: 120},
        {id: 5, name: "Spaghetti Carbonara",date: new Date(Date.now()).toISOString().slice(0, 10) ,price: 170}  
    ]

    return(
        <div>
            <h3 className="font-bold">Last Orders</h3><br/>
            {orders.map((order)=>{
                return <div className="flex justify-between gap-10" key={order.id}>
                        <GoBriefcase size={46} className="text-slate-400"/>
                        <div className="flex flex-col items-start">
                            <h4 className="text-left">{order.name}</h4>
                            <p className="text-slate-400 text-left">{order.date}</p>
                        </div>

                        <div className="bg-green-50 p-1 rounded-2xl flex items-center h-10	w-20">
                            <p className="text-green-600">Ksh. {order.price}</p>
                        </div>
                    </div>
            })}
        </div>
    )
}