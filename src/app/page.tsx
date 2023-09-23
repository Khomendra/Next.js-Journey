//Routing : means how web pages link

//Linking will do following things:
//1. Once we do localhost:3000/ login ===========> will redirect to login page
//2. Once we do localhost:3000/ about ===========> will redirect to about page

'use client'

import Link from "next/link"
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  //Created a functon and passing '/login' and '/about' as parameter
  const navigate = (name) =>{
      router.push(name)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Basic Routing | Make New Page</h1>
      <h2>Hi, This code is written by Khomendra</h2>
      
      {/* Linking in Nextjs */}
      <p>Below two buttons are Linking</p>
      <Link href="/login">Login Page</Link> 
      <Link href="/about">About Page</Link>

      {/* Navigation in Nextjs */}
      <p>Below two buttons are Navigation</p>
      <button onClick={() => navigate("/login")}>Login Page</button>
      <button onClick={() => navigate("/about")}>About Page</button>
    </main>
  )
}
