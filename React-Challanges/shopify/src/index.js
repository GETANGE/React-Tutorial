import react from 'react';
import ReactDom from 'react-dom/client';
import "./index.css";

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

// Main body of the page
function App() {
    return (
        <div>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
    
}
// defining the header compoment.
function Header() {
    const title={fontsize: "48px", textTransform: "uppercase"}
    return (
        <header className='header'>
            <h1 style={title}>Gachagua Pizza Motel</h1>
        </header>
    )
}
// create the Menu component
function Menu() {
    //const pizza = pizzaData;
    const style={fontsize:'40'}
    return (
        <div className='menu'>
            <h2 style={style}> Our Local Menu</h2>
            <div className='pizzas'>
                {pizzaData.map((pizza)=>(
                    <Pizza pizzaObj={pizza} key={pizza.name}/>
                ))}
            </div>
        </div>
    )
}

function Pizza(props) {
    return (
        <div className='pizza'>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <p>{props.pizzaObj.price}</p>
            </div>
        </div>
    )
}

//creating the footer component
function Footer(){
    const Hour = new Date().getHours();
    const openHour=9;
    const closeHour = 21;
    const opening= Hour >= openHour && Hour <= closeHour;
    console.log(opening);

    return (
        <footer className='footer'>
            {opening ? (
                <div className='order'>
                    <p>We are currently open from {openHour}:00.A.M to {closeHour}:00.P.M</p>
                    <button className='btn'>Order</button>
                </div>
            ):<p>Unfortunately we've closed for the day</p>}
        </footer>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <react.StrictMode>
        <App/>
    </react.StrictMode>
);