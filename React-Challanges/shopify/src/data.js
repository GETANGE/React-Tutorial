export function Menu(){
    return(
        <fragment>
            <Pizza />
        </fragment>
    )
}

function Pizza(){
    return(
        <div className="first-div">
            <img src="pizzas/salamino.jpg" alt="Pizza Salamino" className="image"/>
            <h3>Pizza Salamino</h3>
            <p>Tomato and mozarella</p>
            <p>10</p>
        </div>
    )
}