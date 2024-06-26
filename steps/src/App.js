import { useState } from "react";
import { sculptureList } from "./data.js";
const messages = ["Learn React ⚛ ", "Apply Jobs 👜", "Invest your new income 💸"];

export default function App() {
  // using states in components
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const[test, setTest]= useState({name:'Emmanuel'});

  //   console.log(arr) ;
  //  const  step=1

  // adding event handlers in react component
  function handlePrevious() {
    if (step > 1) {
      // updating state on currentState
      setStep((currentStep)=>currentStep-1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((step)=>step + 1);
      setStep((step)=>step + 1);
    }
    // setTest({ name:'Jacob kapyengan'});
  }

  // why a regular variable isn't enough.
  //adding a state variable.
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClicks() {
    setIndex(index + 1);
  }

  function handleClickMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      {/* // using of props in react (DOCUMENTATION)
  // USING METHOD 1: Passing props to the child component */}
      <div>
        <PassingProps
          person="Emmanuel Getange"
          profession="Fullstack Web Developer"
          size="23"
        />
      </div>
      <div>
        <button
          className="close"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          &times;
        </button>

        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            <p className="message">
              Step {step}:{messages[step - 1]}
            </p>

            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>

              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        <button onClick={handleClicks}>Next</button>
        <h2>
          <i>{sculpture.name}</i>
          <h6>by {sculpture.artist}</h6>
        </h2>
        <h6>
          ({index + 1} of {sculptureList.length})
        </h6>
        <button onClick={handleClickMore}>
          {showMore ? "Hide" : "Show"} details
        </button>
        <br></br>
        <img src={sculpture.url} alt={sculpture.alt} />

        {showMore && <p>{sculpture.description}</p>}
      </div>
    </>
  );
}

// using of props in react (DOCUMENTATION)
// USING METHOD 1: Passing props to the child component
function PassingProps(props) {
  console.log(props);
  return (
    <div>
      <h1>My name is :{props.person}</h1>
      <h3>My profession is :{props.profession}</h3>
      <h3>My age is :{props.size}</h3>
    </div>
  );
}
