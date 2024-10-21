import React from "react";
import { Button } from "@mui/material";
import { useContext, useState } from "react";

const MyContext = React.createContext({});

function MyChildComp() {
  const { count, setCount } = useContext(MyContext);
  return (
    <div style={{ border: "1px solid white", padding: "8px", margin: "8px" }}>
      <h3>MyChildComp</h3>
      context count: {count}
      <br />
      <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
        +
      </Button>
    </div>
  );
}

function MyUseContext() {
  const [c, setC] = useState(0);
  return (
    <MyContext.Provider value={{ count: c, setCount: setC }}>
      <h1>useContext</h1>
      <MyChildComp />
      <MyChildComp />
      <Button variant="contained" onClick={() => setC((c) => c + 1)}>
        +
      </Button>
    </MyContext.Provider>
  );
}

export default MyUseContext;
