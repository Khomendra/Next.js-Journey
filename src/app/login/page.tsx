// To see the Login Page, go to localhost:3000/login
'use client'

import Link from 'next/link'
import { useRouter } from "next/navigation";

const Login = () =>{
    const router = useRouter();
    const navigate = (name: any) =>{
        router.push("/login/"+name);
    }
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Login Page</h1>

            {/* Linking */}
            <Link href="/">Go to Home Page</Link>

            {/* Navigation */}
            <button onClick={() => router.push("/")}>Home</button>

            {/* Nested Routing */}
            <button onClick={() => navigate("student")}>Student</button>
            <button onClick={() => navigate("teacher")}>Teacher</button>
        </div>
    )
}

export default Login;