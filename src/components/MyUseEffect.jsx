import React from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

// Note:
// dependence [] -> 只會觸發一次
// 沒有 dependence -> 每次render 都會出發一次
// 當改變a時 畫面不變 當改變b -> b and c 都會改變

// useLayoutEffect 會在useEffect之前

function MyUseEffect() {
  const [a, setA] = useState("a");
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  console.log("我在外面");

  //
  useLayoutEffect(() => {
    console.log("useLayoutEffect trigger");
  });

  //  once
  useEffect(() => {
    console.log("once");
  }, []);

  // trigger when each render
  useEffect(() => {
    console.log("1 trigger when each render");
    return () => {
      console.log("2 trigger when each render return");
    };
  });

  //  by dependencies
  useEffect(() => {
    setC((c) => c + 1);
  }, [b]);

  return (
    <div>
      {console.log("MyUseEffect render")}
      <h1>useEffect</h1>
      <div>once a:{a}</div>
      <div>every b:{b}</div>
      <div>by dependence c:{c}</div>

      <Button
        style={{ margin: "16px" }}
        variant="contained"
        onClick={() => setA((a) => a + "->click")}
      >
        count a ++
      </Button>

      <Button
        style={{ margin: "16px" }}
        variant="contained"
        onClick={() => setB((b) => b + 1)}
      >
        count B ++
      </Button>
    </div>
  );
}

export default MyUseEffect;
