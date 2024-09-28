import { createStore } from 'redux';

const initialState = { counter: 0 };

// Must have a reducer
const reducerFn = (state = initialState, action) => {
    /**
     * Limitations of reducer functions:
     * 1. They should be synchronous functions.
     * 2. We should not mutate the original state => It will break the application.
     */

    if (action.type === 'INC') {
        // Return a new state with the incremented counter
        return { counter: state.counter + 1 };
    }

    if (action.type === 'DEC') {
        // Ensure the counter does not go below 0
        if (state.counter > 0) {
            return { counter: state.counter - 1 };
        }else{
            alert("Cannot go below 0");
        }
    }
    if(action.type === "ADD"){
        return {counter: state.counter + action.payload};
    }
    if(action.type === "SUB"){
        if(state.counter > 0) {
            return {counter: state.counter - action.payload}
        }else{
            alert("Cannot go below 0");
        }
    }

    // Return the unchanged state if no action matches
    return state;
};

const store = createStore(reducerFn);

export default store;