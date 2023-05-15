import React, { useState } from "react";

export const Counter = () => {
    
    const [count, setCount] = useState(1);

    const home = () => {
      setCount(1);
    };
    
    const Profile = () => {
      setCount(2);
    };
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={home}>home</button>
            <button onClick={Profile}>Profile</button>
        </div>  
    );

};