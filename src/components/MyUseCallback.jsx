import React, { useState, memo } from "react";
import { Button } from "@mui/material";
import { useCallback } from "react";

// Note:
// useCallback + moemo
// 當component memo 的props沒有改變的情況下 不會做render

const HasUseCb = memo(({ cb }) => {
  return (
    <div>
      {console.log("hasUseCb render")}
      <Button
        style={{ marginTop: "16px" }}
        variant="contained"
        onClick={() => cb("has memo")}
      >
        HasUseCb btn
      </Button>
    </div>
  );
});

function NoUseCb({ cb }) {
  return (
    <div>
      {console.log("noUseCb render")}
      <Button
        style={{ marginTop: "16px" }}
        variant="contained"
        onClick={() => cb("no has memo")}
      >
        noUseCb btn
      </Button>
    </div>
  );
}

function MyUseCallback() {
  const [count, setCount] = useState(0);

  const cb = (trigger) => {
    console.log("cb: ", trigger);
  };

  const useCb = useCallback((trigger) => cb(trigger), []);

  const noUseCb = cb;

  return (
    <div>
      {console.log("MyUseCallback render")}
      <h1>useCallback</h1>

      <HasUseCb cb={useCb} />
      <NoUseCb cb={noUseCb} />

      <Button
        style={{ marginTop: "16px" }}
        variant="contained"
        onClick={() => setCount((c) => c + 1)}
      >
        trigger render
      </Button>
    </div>
  );
}

export default MyUseCallback;
