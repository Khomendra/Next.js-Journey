//'use client' tells the browser that all module and component belongs to Client, not Server.
'use client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <User name="Raj"/>
      <User name="Peter"/>
      <button onClick={() => alert("Hello Nextjs")}>Click Me</button>
      <h1>Home Page</h1>
    </main>
  )
}

const User = (prop) =>{
    return(
      <div>
        <h2>My name is {prop.name}</h2>
      </div>
    );
}