export function Menu(){
    return(
        <fragment className="flex-container">
            <Pizza 
                name="Pizza Spinaci"
                ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                soldOut ={false}
                price={300}
            />
            <Pizza 
                name= "Focaccia"
                photoName= "pizzas/focaccia.jpg"
                ingredients= "Bread with italian olive oil and rosemary"
                soldOut = {false}
                price ={200}
            />
            <Pizza 
                name= "Pizza Margherita"
                photoName= "pizzas/margherita.jpg"
                ingredients= "Tomato and mozarella"
                soldOut = {false}
                price ={150}
            />
            <Pizza 
                name= "Pizza Funghi"
                photoName= "pizzas/funghi.jpg"
                ingredients= "Tomato, mozarella, mushrooms, and onion"
                soldOut = {false}
                price ={150}
            />
            <Pizza 
                name= "Pizza Salamino"
                photoName= "pizzas/salamino.jpg"
                ingredients= "Tomato, mozarella, and pepperoni"
                soldOut = {false}
                price ={250}
            />
            <Pizza 
                name= "Pizza Prosciutto"
                photoName= "pizzas/prosciutto.jpg"
                ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
                soldOut = {true}
                price ={80}
            />
        </fragment>
    )
}

function Pizza(props) {
    const {photoName, price, ingredients, name, soldOut} = props

    if(soldOut){
        return null
    }else{
        return(
            <div className="first-div">
                <div className="second-div">
                    <img src={photoName} alt="Pizza Salamino" className="image"/>
                    <h3>{name}</h3>
                    <p>{ingredients}</p>
                    <p>{soldOut}</p>
                    <p style={{color:"green"}}>Ksh.{price} /=</p>
                </div>
                <button className="button2">Add to Cart</button>
            </div>
        )
    }
}