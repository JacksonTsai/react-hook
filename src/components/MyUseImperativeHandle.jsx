import React from "react";
import { forwardRef, useImperativeHandle } from "react";
import { Button } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";

// parent comp 要執行 child comp 的功能

const MyForwardRefComp = forwardRef((props, ref) => {
  const elRef = useRef();

  useImperativeHandle(ref, () => ({
    triggerFocus: () => elRef.current.focus(),
  }));

  return (
    <>
      <div style={{ border: "1px solid white" }}>
        <h1>MyForwareRefComp</h1>
        <input type="text" ref={elRef} />
      </div>
    </>
  );
});

const MyForwardRefComp2 = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    count,
  }));

  return (
    <>
      <div style={{ border: "1px solid white" }}>
        <h1>MyForwardRefComp2</h1>
        count:{count}
        <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
          +
        </Button>
      </div>
    </>
  );
});

function MyUseImperativeHandle() {
  const parentRef = useRef();
  const parentRef2 = useRef();

  return (
    <div>
      <h1>useImperativeHandle</h1>
      <MyForwardRefComp ref={parentRef} />
      <MyForwardRefComp2 ref={parentRef2} />
      <Button
        variant="contained"
        onClick={() => parentRef.current.triggerFocus()}
      >
        focus MyForwardRefComp input
      </Button>

      <Button
        variant="contained"
        onClick={() => console.log(parentRef2.current)}
      >
        get MyForwardRefComp2
      </Button>
    </div>
  );
}

export default MyUseImperativeHandle;
