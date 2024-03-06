import { Fragment } from "react";

export default function Profile(){
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export function Profile1(){
    // 1. USES OF CURLY BRACES
    // Passing strings with quotes.
    const avatar = "https://i.imgur.com/QIrZWGIs.jpg";
    const description = "Alan L. Hart";

    // a window into the javascript world
    const name = "Emmanuel";

    return (
        <Fragment>
            <img
                src={avatar}
                alt= {description}
            />
            <p>{name} is an upcoming software developer</p>

            {/* Using "double curlies" in css and other objects in JSX */}
            <ul style={{
                backgroundColor:'goldenrod',
                color:'white'
            }}>
                <li>
                    <a href="https://www.linkedin.com/in/emmanuel-hart/">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/emmanuel-hart">GitHub</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/emmanuel-hart/">Udemy</a>
                </li>
            </ul>
        </Fragment>
    );
}

export function TodoList(){
    const person = {
        name: 'Emmanuel',
        profession: 'Fullstack Web Developer',
        size: '23',

        // theme and listing are objects
        theme: {
            backgroundColor: 'aqua',
            color: 'black'
        },
        listing: {
            liststyle: 'none',
            padding: '0'
        }
    }
    return(
        <Fragment >
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
                <img
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara"
                />
                <p>My profession is am a {person.profession}</p>
                <p>My age is {person.size} years</p>
                <ul style={person.listing}>
                    <li>Improve the videophone</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on the alcohol-fuelled engine</li>
                </ul>
            </div>
        </Fragment>
    )
}

export function ProfileComponent({person, size}){
    const {src, alt="alternative"} = person;
    const {width, height }= size;

    const borderRadius ={
        theme: {
            borderRadius: '50%'
        }
    }
    return(
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={borderRadius.theme}
        />
    )
}

// props syntax destructuring
export function ProfileComponent2(props){
    return (
        <>
            <h2>My small details</h2>
            <p>My name is {props.person}</p>
            <p>My age is {props.size}</p>
            <p>I'm dating a {props.tribe} guy</p>
        </>
    )
}

// Specifying a default value for a prop
export function ProfileComponent3({person, size= 22, tribe}){
    return (
        <>
            <p>My name is {person}</p>
            <p> My age is {size}</p>
            <p> My tribe is {tribe}</p>
        </>
    )
}

// Conditional Rendering
export function Item({name, isPacked}){
    if(isPacked){
        return <li>{name}✔</li>
    }
    return <li>{name}</li>
}

// Conditionally returning nothing with null
export function Item2({name, isPacked}){
    if(isPacked){
        return null;
    }
    return <li>{name}✔</li>
}

// conditionally(ternary) operator (? :)
export function Item3({name, isPacked}){
    return (
        <li>
            {isPacked ?( <del> {name + '✔'} </del>) : (name)}
        </li>
    )
}