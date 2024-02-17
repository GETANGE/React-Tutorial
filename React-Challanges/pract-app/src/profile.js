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