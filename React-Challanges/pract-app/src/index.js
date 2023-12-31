import react from "react";
import ReactDom from "react-dom/client";
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
        <div className="card">
            <Avatar />
        <div className="data">
            <Intro />
            <SkillList />
        </div>
        </div>
    );
    }

    function Avatar() {
        return (
            <div>
                <img className="avatar" src="Image.jpg" alt="Emmanuel Getange" />
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