import { useState } from "react";
import { Button } from "@nextui-org/react";

function Counter() {
    
    const [count, setCount] = useState(10);
    // const count = arr[0];
    // const setter = arr[1];
    
    // let count = 10;

    const increment = () => {
        console.log(`${count} -> ${count + 1}`);
        // ++count;
        setCount(count + 1);
    }
    const reset = () => setCount(0);
    
    return (
        <>
            <h3>Counter</h3>
            <p>Current value: <strong>[{count == 0 ? "-" : count}]</strong></p>
            <Button color="primary" onClick={increment}>Increment</Button>
            <Button onClick={reset}>Reset</Button>
        </>
    )
}

export default Counter;