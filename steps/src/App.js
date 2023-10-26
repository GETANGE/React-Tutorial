import { useState } from "react";
import { sculptureList } from "./data.js";
const messages=[
    "Learn React ",
    "Apply Jobs",
    "Invest your new income"
];

export default function App(){
  // using states in components
  const [step, setStep]=useState(1) ;

//   console.log(arr) ;
//  const  step=1

    // adding event handlers in react component
    function  handlePrevious(){
      if(step>1){
        setStep(step-1)
      }
    }
    function  handleNext(){
      if(step<3){
        setStep(step+1)
      }
  }

  // why a regular variable isn't enough.
  //adding a state variable.
  const[index, setIndex]= useState(0)

  function handleClicks(){
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index]
    return (
      <>
      <div className="steps">
        <div className="numbers">
          <div className={step>=1 ? 'active': ""}>1</div>
          <div className={step>=2 ? 'active': ""}>2</div>
          <div className={step>=3 ? 'active': ""}>3</div>
        </div>

        <p className="message">Step {step}:{messages[step-1]}</p>

        <div className="buttons">
          <button style={{backgroundColor:'#7950f2', color:'#fff'}} 
            onClick={handlePrevious}>Previous</button>

          <button style={{backgroundColor:'#7950f2', color:'#fff'}} 
            onClick={handleNext}>Next</button>
        </div>
      </div>

      <button onClick={handleClicks}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        <h6>by {sculpture.artist}</h6>
      </h2>
      <h6>({index+1} of {sculptureList.length})</h6>
      <img 
      src={sculpture.url}
      alt={sculpture.alt}/>

      <p>{sculpture.description}</p>
      </>
    )
}