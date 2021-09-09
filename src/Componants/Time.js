import React, { useState } from 'react'

const Time = () =>{
   let time = new Date().toLocaleTimeString();

   const [ctime, setCtime] = useState(time);
   
    return (
        <div>
            <h1>{ctime}</h1>
        </div>
    );
}

export default Time
