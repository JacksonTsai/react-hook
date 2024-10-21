import React, { useState, useMemo } from "react";
import { Button } from "@mui/material";
// Note:
// 當c改變時  memoValue 才會重新計算

function MyComp({ a, c }) {
  const memoValue = useMemo(() => {
    return a + 100;
  }, [c]);
  return (
    <>
      <h1>memoComp memoValue:{memoValue}</h1>
    </>
  );
}

function MyUseMemo() {
  const [a, setA] = useState(0);
  const [c, setC] = useState(0);
  const memoValue = useMemo(() => {
    console.log("memoValue 重新計算");
    let n = 0;
    while (n < 2000) {
      n = n + 1;
    }
    return c + 100;
  }, [c]);

  return (
    <div>
      <h1>useMemo</h1>
      a:{a}
      c:{c}
      <p>memoValue: {memoValue}</p>
      <Button variant="contained" onClick={() => setC((c) => c + 1)}>
        change c
      </Button>
      <Button
        style={{ marginLeft: "16px" }}
        variant="contained"
        onClick={() => console.log(memoValue)}
      >
        get memoValue
      </Button>
      <Button
        style={{ marginLeft: "16px" }}
        variant="contained"
        onClick={() => setA((v) => v + 1)}
      >
        a ++
      </Button>
      <MyComp a={a} c={c} />
    </div>
  );
}

export default MyUseMemo;
