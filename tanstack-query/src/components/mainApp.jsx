import CalenderDisplay from "./calenderComponent";
import RandomMeal from "./randomMealComponent";
import Orders from "./orderComponent";
import TopMeal from "./topMealComponent";
import SideDish from "./sideDishComponent";
import Search from "./searchComponent";
import VerticalNav from "./visaCardComponent";

export default function MainApp(){
    return (
        <div className="bg-white w-lvw h-screen flex">
            <div className="w-1/4 bg-stone-100">
                <VerticalNav/>
            </div>
            <div className="w-full">
                <div className="h-20">
                    <Search/>
                </div> <br/>
                <div className="flex justify-evenly gap-3.5">
                    <CalenderDisplay/>
                    <RandomMeal/>
                    <Orders/>
                </div>
                {/* Adding the last components */}
                <div className="flex gap-40" style={{marginLeft:'7%'}}>
                    <TopMeal/>
                    <SideDish/>
                </div>
            </div>
        </div>
    )
}