export function Menu(){
    return(
        <fragment className="flex-container">
            <Pizza 
                name="Pizza Spinaci"
                ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={300}
            />
            <Pizza 
                name= "Focaccia"
                photoName= "pizzas/focaccia.jpg"
                ingredients= "Bread with italian olive oil and rosemary"
                price ={200}
            />
            <Pizza 
                name= "Pizza Margherita"
                photoName= "pizzas/margherita.jpg"
                ingredients= "Tomato and mozarella"
                price ={150}
            />
            <Pizza 
                name= "Pizza Funghi"
                photoName= "pizzas/funghi.jpg"
                ingredients= "Tomato, mozarella, mushrooms, and onion"
                price ={150}
            />
            <Pizza 
                name= "Pizza Salamino"
                photoName= "pizzas/salamino.jpg"
                ingredients= "Tomato, mozarella, and pepperoni"
                price ={250}
            />
            <Pizza 
                name= "Pizza Prosciutto"
                photoName= "pizzas/prosciutto.jpg"
                ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
                price ={80}
            />
        </fragment>
    )
}

function Pizza(props) {
    return(
        <div className="first-div">
            <div className="second-div">
                <img src={props.photoName} alt="Pizza Salamino" className="image"/>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <p style={{color:"green"}}>Ksh.{props.price} /=</p>
            </div>
            <button className="button2">Add to Cart</button>
        </div>
    )
}