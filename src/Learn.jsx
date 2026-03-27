import { useState, useEffect } from "react";

function Learn() {
  const [count, setCount] = useState(0);

  // useEffect runs when 'count' changes
  useEffect(() => {
    console.log("Component rendered or updated! Count:", count);

    // optional cleanup
    return () => {
      console.log("Cleaning up before next render or unmount");
    };
  }, [count]); // dependency array

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase +</button>
      <button onClick={() => setCount(count - 1)}>Decrease -</button>
    </div>
  );
}

export default Learn