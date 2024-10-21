import "./App.css";
import MyUseState from "./components/MyUseState";
import MyUseEffect from "./components/MyUseEffect";
import MyUseCallback from "./components/MyUseCallback";
import MyUseMemo from "./components/MyUseMemo";
import MyUseReducer from "./components/MyUseReducer";
import MyUseContext from "./components/MyUseContext";
import MyUseRef from "./components/MyUseRef";
import MyUseImperativeHandle from "./components/MyUseImperativeHandle";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const fn = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1>App: {count}</h1>
      <Button variant="outlined" onClick={fn}>
        ++
      </Button>
      <hr />
      <MyUseState />
      <hr />
      <MyUseEffect />
      <hr />
      <MyUseCallback />
      <hr />
      <MyUseMemo />
      <hr />
      <MyUseReducer />
      <hr />
      <MyUseContext />
      <hr />
      <MyUseRef />
      <hr />
      <MyUseImperativeHandle />
    </>
  );
}

export default App;
