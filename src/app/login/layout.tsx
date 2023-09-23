// Common Layout is a Root Layout which provides layout to it's Child Router like Navbar, Header, Footer,
// Sections
// inside Layout() function the passed parameter should be an Object

import Link from "next/link";
import './login.css';

export default function Layout({children}: any){
    return(
        <div>
            <h1>Common Layout for Login Screen</h1>
            <ul className="login-menu">
                <li>
                    <h4>Login Nav</h4>
                </li>
                <li>
                    <Link href="/login">Main Login Page</Link>
                </li>
                <li>
                    <Link href="/login/student">Student Login Page</Link>
                </li>
                <li>
                    <Link href="/login/teacher">Teacher Login Page</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}