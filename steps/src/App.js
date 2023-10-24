const messages=[
    "Learn React ",
    "Apply Jobs",
    "Invest your new income"
];

export default function App(){
    const step=1;

    // adding event handlers in react component
    function  handlePrevious(){
        alert("Previous step ");
    }
    function  handleNext(){
      alert("Next step ");
  }
    return (
      <div className="steps">
        <div className="numbers">
          <div className={`${step>=1 ? 'active': ""}`}>1</div>
          <div className={`${step>=2 ? 'active': ""}`}>2</div>
          <div className={`${step>=3 ? 'active': ""}`}>3</div>
        </div>

        <p className="message">Step {step}:{messages[step-1]}</p>

        <div className="buttons">
          <button style={{backgroundColor:'#7950f2', color:'#fff'}} 
            onClick={handlePrevious}>Previous</button>

          <button style={{backgroundColor:'#7950f2', color:'#fff'}} 
            onClick={handleNext}>Next</button>
        </div>
      </div>
    )
}