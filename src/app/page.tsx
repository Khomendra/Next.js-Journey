//
'use client'

export default function Home() {
  
  //1. Decaration of Function inside Home Component
  const apple = () =>{
    alert("Apple is a Fruit");
  }

  //2. How to pass data on a function
  // const apple = (fruit) =>{
  //   alert(fruit);
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Event, Function and State</h1>

      {/* 1. shows how can we use function inside COmponent */}
      <button onClick={() => apple()}>Click Me</button>

      {/* 2. Shows how to pass data on function */}
      {/* <button onClick={() => apple("Banana")}>Click Me</button> */}
      <h1>Home Page</h1>
    </main>
  )
}
