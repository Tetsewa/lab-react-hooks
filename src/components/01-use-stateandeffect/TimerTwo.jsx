import { useState, useEffect } from "react";   

function TimerTwo() {
    const [count, setCount] = useState(0);
     // Add the effect in the function body
     useEffect(()=> {
        console.log("useEffect - Mounting (initial render)");
        const id = setInterval(()=> {
            setCount ((prevCount) => prevCount+0.5);
        }, 1000)
     }, []) // <--  [] means: Run the effect only once, after initial render

  return (
    <div className="Timer">
      <h2>Timer Two</h2>
 
      <h3>{count}</h3>
    </div>
  )
}

export default TimerTwo
