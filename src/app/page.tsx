//Routing : means how web pages link
//Once we do localhost:3000/ login ===========> will redirect to login page
//Once we do localhost:3000/ about ===========> will redirect to about page

'use client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Routing</h1>
      <h2>Hi, This code is written by Khomendra</h2>
    </main>
  )
}
