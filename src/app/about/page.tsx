//To see the About Page, to to localhost:3000/about

'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () =>{
    const router = useRouter();
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>About Page</h1>

            {/* Linking */}
            <Link href="/">Home Page</Link>

            {/* Navigation */}
            <button onClick={() => router.push("/")}>Home</button>
        </div>
    )
}

export default About;