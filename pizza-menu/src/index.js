import React from "react";
import ReactDom from "react-dom/client";
import './index.css'

    const pizzaData = [
        {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
        },
        {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
        },
        {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
        },
        {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
        },
        {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
        },
        {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
        },
    ];
    
function App(){
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

// we create new components by using functions.
function Header(){
    const style={ fontSize:"48px" ,textTransform:"uppercase"}
        return (
            <header className="header">
                <div>
                    <h1 style={style} >Fast React Pizza Co.</h1>
                </div>
            </header>
        )
}

function Menu(){
    // how to parse properties (props)
    const pizza =pizzaData;
    const numPizzas=pizza.length;

    const style={fontSize:"40"}
    // re-using components  
        return (
            <main className="menu">
                <h2 style={style}>Our Menu</h2>

{/* condtional rendering with terneries    */}
                {numPizzas > 0 ? (
                    <ul className="pizzas">
                    {/* create new array */}
                        {pizza.map((pizza)=>(
                        <Pizza pizzaObj={pizza} key={pizza.name}/>))}
                    </ul>
                ): <p>Still under production.Please wait :)</p>}


                    {/* <Pizza 
                    name='Pizza Prosciutto' 
                    ingredients='Tomato, mozarella, ham, aragula, and burrata cheese'
                    photoName="pizzas/prosciutto.jpg"
                    price={"Ksh "+50}
                    />

                    <Pizza 
                    name="Pizza Funghi"
                    ingredients="Tomato, mushrooms"
                    photoName="pizzas/funghi.jpg" 
                    price={"Ksh "+100}
                    />

                    <Pizza 
                    name="Pizza Salamino"
                    ingredients="Tomato, mozarella, and pepperoni"
                    photoName="pizzas/salamino.jpg" 
                    // use javascript to write numbers 
                    price={"Ksh "+(10+10)}
                    /> */}
            </main>
        )
}

// receiving properties, we pass them as parameters.
function Pizza(props){
    console.log(props)
    return ( 
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
            <div className="">
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price+"/="}</span>
            </div>
        </li>
    )
}
function Footer(){
    const hour=new Date().getHours();
    console.log(hour);

    const openHour=11;
    const closeHour=21;
    const isOpen =hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if(hour >= openHour && hour <= closeHour){
    //     alert("We're currently open!");
    // }else{
    //     alert("Sorry We're are closed!");
    // } 

    // 
        return (
            <footer className="footer">
                
                {/* short circuiting in progress. */}
                {isOpen ? ( 
                    <div className="order">
                        <p>We're open until {closeHour}:00. Come visit us</p>
                        <button className="btn">Order</button>
                    </div>          
                ): <p>We are happy to welcome you between {openHour}:00 AM. to {closeHour}:00 PM </p>}
            </footer>
    )
}

// THIS IS HOW WE RENDER A ROOT IN REACT.
// WE MAP THIS FILE TO A TEMPLATE .
const root =ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);