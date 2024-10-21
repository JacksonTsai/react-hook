import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

function MyUseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState</h1>
      <p>Count: {count}</p>
      <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
        count +
      </Button>
    </div>
  );
}

export default MyUseState;
