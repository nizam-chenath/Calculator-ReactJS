import React, { useState } from 'react'
import "./Time.css"

const Time = () =>{
   let time = new Date().toLocaleTimeString();

   const [ctime, setCtime] = useState(time);
   
   const Utime =()=>{
       time = new Date().toLocaleTimeString();
       setCtime(time);
   };

   setInterval(Utime, 1000)

    return (
        <div className="time">
            <h1>{ctime}</h1>
        </div>
    );
}

export default Time
