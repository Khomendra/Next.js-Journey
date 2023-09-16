//State, how to define and use
'use client'
import { useState } from "react";

export default function Home() {

  //Defining a State
  const[userName, setUserName] = useState("Anil");

  const displayName = () =>{
      //Changing the userName using useState from React
      setUserName("Shubham");
  }

  //How to use one Component inside Another Component
  //What's the Difference between Normal Component and Component Function?
  const InnerComponent = () =>{
    return(
      <h2>Inner Component</h2>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Event, Function and State</h1>
      <h2>Hi, This code is written by {userName}</h2>

      {/* <InnerComponent/> */}

      {/* Component Function */}
      {/* {InnerComponent()} */}
      <button onClick={displayName}>Click Me</button> 
    </main>
  )
}
