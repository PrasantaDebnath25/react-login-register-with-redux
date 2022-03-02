   const initialState = {
    count: 0
  };
  function Reducer(state = initialState, action) {
      console.log(action);
      
    switch(action.type) {
        case "Increment":
          return {
            count: state.count + action.payload
          };
        case "Decrement":
          return {
                count: state.count - action.payload
          };
          
        default: return state;
    }

  }

  export default Reducer;