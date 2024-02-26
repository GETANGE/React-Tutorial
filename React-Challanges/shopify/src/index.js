import react from 'react';
import ReactDom from 'react-dom/client';
import { Menu } from './data';
import "./index.css";

export default function App(){
    return(
        <>
            <NavigationBar/>
            <Menu />
        </>
    )
}

export function NavigationBar(){
    return(
        <>
        <div className='navbar-top'>
            <ul className='Nav-bar'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contacts</li>
            </ul>
            <button className="button">Log in</button>
        </div>
        </>
    )
}

export function Footer(){
    return(
        <></>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <react.StrictMode>
        <App/>
    </react.StrictMode>
);