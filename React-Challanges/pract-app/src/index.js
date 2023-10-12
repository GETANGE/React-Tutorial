import react from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const skills=[
    {
        skill:"HTML+CSS",
        level:"Advanced",
        color:"#2662EA",
        className:"html",
    },
    {
        skill:"JavaScript",
        level:"Advanced",
        color:"#EFD81D",
        className:"javascript",
    },
    {
        skill:"Web Design",
        level:"Advanced",
        color:"#C3DCAF",
        className:"design",
    },
    {
        skill:"Git and Github",
        level:"Advanced",
        color:"#E84F33",
        className:"design",
    },
    {
        skill:"React",
        level:"Advanced",
        color:"#60DAFB",
        className:"react"
    }
]
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
                        {skills.map((skill, index)=>(
                            <p key={index} className='{skill.className}'>{skill.skill}</p>
                        ))}
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