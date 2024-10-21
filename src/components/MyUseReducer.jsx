import React, { useReducer } from "react";
import { Button } from "@mui/material";

const myReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByNum":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

const initValue = {
  count: 0,
};

function MyUseReducer() {
  const [state, dispatch] = useReducer(myReducer, initValue);

  return (
    <div>
      <h1>useReducer</h1>
      <p>State.count: {state.count}</p>
      <Button
        style={{ marginRight: "16px" }}
        variant="contained"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </Button>
      <Button
        style={{ marginRight: "16px" }}
        variant="contained"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </Button>
      <Button
        style={{ marginRight: "16px" }}
        variant="contained"
        onClick={() => dispatch({ type: "incrementByNum", payload: 100 })}
      >
        + 100
      </Button>
    </div>
  );
}

export default MyUseReducer;
