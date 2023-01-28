import React, { useState } from 'react';
export default function Use_hooks() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 style={{ textAlign: "center", color: "red" }}>Example of UseState using function based Component</h1>
            <p>
                <h1>{count}</h1>
                <button onClick={handleIncrement}>+</button> |
                | <button onClick={handleDecrement}>-</button>
            </p>
        </>
    );
    // handleIncrement
    // let handleIncrement = function () { }
    function handleIncrement() {
        setCount(count + 1)

    }
    // handleDecrement
    function handleDecrement() {
        if (count > 0) {
            setCount(count - 1)
        }
        else {
            alert("value must be greater than Zero(0)")
        }

    }
}

/*
syntax of usestate how to made

function useState(x){
    class Test extends Component{

    }
    app =  new Test(x)
}
*/