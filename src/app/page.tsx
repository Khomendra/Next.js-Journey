'use client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <User name="Raj"/>
      <User name="Peter"/>
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