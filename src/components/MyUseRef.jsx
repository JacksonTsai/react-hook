import React from "react";
import { useRef } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
// Note
// 不會觸發re-render
// 取得element

function MyUseRef() {
  const elRef = useRef(null);
  const prev = useRef(0);
  const [c, setC] = useState(0);

  useEffect(() => {
    prev.current = c;
  }, [c]);

  return (
    <div>
      <h1> useRef</h1>

      <input type="text" ref={elRef} />
      <Button variant="contained" onClick={() => elRef.current.focus()}>
        focus input
      </Button>
      <p>
        count: {c}, prev:{prev.current}
      </p>
      <Button variant="contained" onClick={() => setC((c) => c + 1)}>
        count +
      </Button>
    </div>
  );
}

export default MyUseRef;
