import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button><br/><br/>
      <button onClick={() => setCount(count - 1)}>Decrease</button><br/><br/>
      <button onClick={() => setCount(0)}>Reset</button><br/><br/>
    </div>
  );
}


