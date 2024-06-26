import react from "react";
import ReactDom from "react-dom/client";
import Profile from "./profile";
import { Profile1 } from "./profile";
import { TodoList} from "./profile";
import { ProfileComponent } from "./profile";
import { ProfileComponent2 } from "./profile";
import { ProfileComponent3 } from "./profile";
import { Item } from "./profile";
import { Item2 } from "./profile";
import { Item3 } from "./profile";
import { Item4 } from "./profile";
import { Item5 } from "./profile";
import { List } from "./profile";
import { List2 } from "./profile";
import { Recipe } from "./profile";
import { CupList , Interact} from "./profile";
import "./index.css";

    const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "intermediate",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "beginner",
        color: "#60DAFB"
    }
    ];

    function App() {
        return (
            <>
                <div className="card">
                    <Avatar />
                <div className="data">
                    <Intro />
                    <SkillList />
                </div>
                <Profile/>
                <Profile1 />
                <TodoList />
                <ProfileComponent 
                    person ={
                        {
                            src: "https://i.imgur.com/7vQD0fPs.jpg",
                            alt: "<NAME>",
                        }
                    }
                    size={
                        {
                            width: 100,
                            height: 100
                        }
                    }
                    />

                <ProfileComponent2
                    person='JoyElizabeth Muthoni'
                    size= {23}
                    isSepia= {true}
                    tribe = 'Kisii'
                />
                <ProfileComponent3
                    person='Emmanuel Getange'
                    // size= {23}
                    isSepia= {true}
                    tribe = 'Kisii'
                />

                <PackingList />
                </div>
                <List/>
                <List2/>
                <Pure/>
                <CupList/>
                <Interact/>
            </>
    );
}

function Pure(){
  const style = "margin-top: 10px";
    return(
        <>
            <section style={{style}}>
                <h2 style={{style}}>For two:</h2>
                <Recipe 
                    drinkers={2}
                 />
                 <h2>For four:</h2>
                 <Recipe 
                    drinkers={4}
                 />
            </section>
        </>
    )
}

function PackingList(){
    return(
        <>
            <section>
                <ul>
                    <Item
                        name = "Emmanuel Getange"
                        isPacked={true}
                    />
                    <Item
                        name = "Backend Developer"
                        isPacked={false}
                    />
                    <Item2
                        name = "Emmanuel Getange"
                        isPacked={true}
                    />
                    <Item2
                        name = "Backend Developer"
                        isPacked={true}
                    />
                    <Item3
                        name = "Fullstack Developer"
                        isPacked={false}
                    />
                    <Item4
                        name = "Backend Developer"
                        isPacked={true}
                    />
                    <Item4
                        name = "Fullstack Developer"
                        isPacked={false}
                    />
                    <Item5
                        name = "Fullstack Developer"
                        isPacked={false}
                    />
                    <Item5
                        name = "Fullstack Developer"
                        isPacked={true}
                    />
                </ul>
            </section>
        </>
    )
}

    function Avatar() {
        return (
            <div>
                <img className="avatar" src="https://i.imgur.com/QIrZWGIs.jpg" alt="Emmanuel Getange" />
            </div>
        )
    }

    function Intro() {
        return (
            <div>
                <h1>Emmanuel Getange</h1>
                <p>
                    Full-stack web developer and teacher at Udemy. When not coding or
                    preparing a course, I like to play board games, to cook (and eat), or to
                    just enjoy the Portuguese sun at the beach.
                </p>
            </div>
        );
    }

function SkillList() {
        return (
            <div className="skill-list">
                {skills.map((skill) => (
                    // extracting JSX into new components
                    <Skill skill={skill.skill} color={skill.color} level={skill.level} key={skill.skill} /> // skill, color and level are properties assigned to Skill Component
                ))}
            </div>
        );
    }

function Skill({skill, color, level}){
        const style={backgroundColor: color};
        return (
            <div className="skill" style={style}>
                <p>{skill}</p>
                <p>
                    {level === 'beginner' && '👶'}
                    {level === 'intermediate' && '👍'}
                    {level === 'advanced' && '💪'}
                </p>
            </div>
        )
    }
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
        <react.StrictMode>
            <App/>
        </react.StrictMode>
);