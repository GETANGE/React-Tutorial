import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux";

function App() {
  /**
   * ONE-WAY DATA FLOW.
   */
  // creating a function to set counter.
  // State: a counter value.
  const [counter, setCounter] = useState(0); // The state is the source of truth. 

  // Action: The events that occur in the app based on user input, and trigger updates in the state
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  }
  const decrement = () => {
    if (counter > 0) {
      setCounter( counter - 1);
    } else {
      alert('Counter cannot go below 0');
    }
  }

  /**
   * This simplicity can be broken down when we have "multiple components" that need to share and use the same state.
   * If those components are located in different parts of the application.
   * 
   *        IMMUTABILITY IN REACT AND REDUX:
   *  Mutable means change --Immutable means is the opposite of Mutable
   */

  // Example :
  let person ={
    name: 'Emmanuel',
    age: 23,
    city: 'Nairobi City',
    address :{
      street: '123 Main St',
      city: 'Nairobi City',
      country: 'Kenya',
    }
  }

  const giveAwesomePowers = function(data) { // this function mutates the "person" object passed into it.
    let newPerson ={
      ...person,
      specialPower : "invisibility"
    }
    return newPerson;
  }
  // initially Bob has no powers.
  console.log(person)

  // Now Bob gets invisibility powers.
  let results = giveAwesomePowers(person)
  // console.log(results)

  console.log("Are they the same ?", person === results)

  /**
   * RULES OF IMMUTABILITY
   * In order to be a pure function must follow these rules:
   *     1. A pure function must always return the same value when given the same inputs.
   *     2. A function must not have any side effects.
   *     3. Pure functions return brand-new objects.
   * 
   *      What are side effects ?
   *        -It means modifying things outside the scope of that immediate function.
   *           * i.e modifying  any other state outside the function like global variables
   */

  /**
   * JS Array Methods That Mutate
      push (add an item to the end)
      pop (remove an item from the end)
      shift (remove an item from the beginning)
      unshift (add an item to the beginning)
      sort
      reverse
      splice
   */
    let a = [1, 2, 3];
    let copy1 = [...a];
    let copy2 = a.slice();
    let copy3 = a.concat();

    let final =[...copy2, ...copy3, ...copy1].sort();
    console.log(final);

    /**
     * WHAT IS REDUX
     * REDUX => Redux is a pattern and library for managing and updating global state, where the UI triggers events called "actions"
     * to describe what happened and separate update logic called "reducers" updates the state in response.
     * 
     * It serves as the centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated 
     * in a predictable fashion.
     */

    /**
     * WHY SHOULD I USE REDUX ?
     * 1. Redux helps you manage "global" state - state that is needed across many parts of your application
     * 
     * -The patterns and tools provided by Redux makes it easier to understand when, where,why and how the state in your application is being updated
     *  and how your application logic will behave when those changes occur.
     * 
     * -Redux guides you towards writing code that is predictable and testable.Which gives you confidence that your application will work as expected.
     * 
     * 2. Redux helps you to deal with shared state management, but like any other tool it has its own tradeoffs
     * It also adds some indirection to your code, and asks you to follow certain restrictions. 
     * It's a trade-off between short term and long term productivity.
     * 
     * Redux is more useful when:
     *   1. You have large amounts of application state that are needed in many places in the app
     *   2. The app state is updated frequently over time
     *   3. The logic to update that state may be complex
     *   4. The app has a medium or large-sized codebase, and might be worked on by many people
     */

    /**
     * REDUX LIBRARIES AND TOOLS.
     * Redux at its core is a small standalone js library. It is commonly used with several other packages.
     *  1.Redux Toolkit
     *     -This is the recommended approach for writing Redux logic
     *     -Redux contains packages and functions that we think are essential for building a Redux application.
     *     -Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications
     */

    /**
     * BASIC TERMS
     * Redux => A complex state management tool, with a single store as CDS
     *
     * Reducers => Manages the state and returns the newly updated state
     *
     * Actions => Actions have 2 properties type: which is a "unique identifier" and "payload which has data"
     *
     * Dispatch => Dispatch is used to send actions to update the data
     * */

    // using pure Redux to build a counter function
  const counter_2 = useSelector((state)=>{
    return state.counter;
        })
  const dispatch = useDispatch(); // used to get the action from the reducer function
  const decrement_2 = function (){
    dispatch({type: 'DEC'})
  }

  const increment_2 = function (){
    dispatch({type: 'INC'})
  }
  
  const addBy = function (){
    dispatch({type: 'ADD', payload:10})
  }

  const minusBy = function (){
    dispatch({type: 'SUB', payload:10})
  }

  return (
    // View: the UI definition.
      <div className="App">
        <h1>Counter App</h1>
        <button onClick={decrement}>Decrement</button>
        Value: {counter}
        <button onClick={increment}>Increment</button>

        {/*  Counter App using Redux pure */}
        <h1>Counter App with Redux </h1>
        <button onClick={minusBy}>Add by 10</button>
        <button onClick={decrement_2}>Decrement</button>
        Value: {counter_2}
        <button onClick={increment_2}>Increment</button>
        <button onClick={addBy}>Add by 10</button>
      </div>
  );
}

export default App;