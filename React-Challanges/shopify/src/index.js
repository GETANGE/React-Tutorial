import react from 'react';
import ReactDom from 'react-dom/client';
import "./index.css";
import "./data.js";

// Main body of the page
function App() {
    return (
        <div>
            <Header/>
        </div>
    )
    
}
// defining the header compoment.
function Header() {
    return (
        <div>
            <h1>Gachagua Menus Hotel</h1>
        </div>
    )
}
// create the Menu component
function Menu() {
    return (
        <div>
            
        </div>
    )
}
//creating the footer component
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <react.StrictMode>
        <App/>
    </react.StrictMode>
);