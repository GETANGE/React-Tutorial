import react from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

function App(){
    return (
        <div>
            <Card/>
        </div>
    )

}
// parsing props 
function Card(){
    return (
        <Profile
        image="picture/image.jpg"
        name ="Emmanuel Getange"
        description="I'm a Full-stack Web developer. Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns"
        html="HTML+CSS"
        design="Web Design"
        javascript="Javascript"
        git="Git and Github"
        react="React Js"
        />
    )
}
// component  to create a profile card
function Profile(props){
    return (
        <main>
            <h2>Profile Card</h2>
            <div className='main-container'>
                <div className='main-siezing'>
                    <img src={props.image} alt={props.name} className='main-image'></img>
                </div>
                <div className='main-description'>
                    <h2>{props.name}</h2>
                    <p className='main-siezing'>{props.description}</p>
                    <div className='inline'>
                        <p className='html'>{props.html}</p>
                        <p className='javascript'>{props.javascript}</p>
                        <p className='design'>{props.design}</p>
                        <p className='git'>{props.git}</p>
                        <p className='react'>{props.react}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
        <react.StrictMode>
            <App/>
        </react.StrictMode>
);