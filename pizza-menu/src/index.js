import React from 'react';
import  ReactDOM  from 'react-dom/client';

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
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}
// creating a new instance of components
function Header() {
    return (
        <h2 style={{color: 'goldenrod'}}>React Fast Food</h2>
    )
}

function Menu() {
    return (
        <div>
            <Pizza/>
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
        <div>
            <p>{new Date().toLocaleString()}. We're Open</p>
        </div>
    );
}

function Pizza() {
    return (
        <div>
            <img src='pizzas/spinaci.jpg' alt='spinaci'/>
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);