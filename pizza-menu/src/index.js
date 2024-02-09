import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';

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
    

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}
// creating a new instance of components
function Header() {
    //const style={color: 'goldenrod', fontSize:"48px", textTransform: "uppercase"}
    return (
        <header className='header'>
            <h1 style={{}} >React Fast Food co.</h1>
        </header>
    )
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <Pizza 
                name="Pizza Spinaci"
                ingredients="Tomato and mozarella"
                photoName="pizzas/salamino.jpg"
                price={10}
            />
            <Pizza 
                name="Pizza Salamino"
                ingredients="Tomato, mozarella, and pepperoni"
                photoName="pizzas/prosciutto.jpg"
                price={15}
            />
        </main>
    )
}

function Pizza(props) {
    console.log(props)
    return (
        <div>
            <img src={props.photoName} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <p>{props.price +5}</p>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours;
    const openHour = 9;
    const closeHour = 21;
    const opening = hour >= openHour && hour <= closeHour;
    console.log(opening);

    // if(hour >= openHour && hour <= closeHour) {
    //     alert("We are open")
    // }else{
    //     alert("We are closed")
    // }

    return (
        <div className='footer'>
            <p>{new Date().toLocaleString()}. We're Open</p>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);