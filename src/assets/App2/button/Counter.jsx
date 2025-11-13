import React, {useState} from "react";

const Counter = function () {
    const [count, settCount] = useState(0)

     function increment() {
        settCount(count + 1)
    }

    function decrement() {
        settCount(count - 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter