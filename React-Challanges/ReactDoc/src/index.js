import react from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App(){
    return(
        <div className="App">
            <h1>Hello World!</h1>
        </div>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
        <react.StrictMode>
            <App/>
        </react.StrictMode>
);