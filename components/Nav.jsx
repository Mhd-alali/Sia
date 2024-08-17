'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    let [toggle, setToggle] = React.useState(false);
    let toggleClasses = toggle ? " h-auto visible mt-4 " : " h-0 invisible ";

    return (
        <nav className="container items-center flex flex-col md:flex-row md:justify-between py-4 md:gap-2">
            <div>
                <h1 className="text-center md:text-left text-xl font-bold uppercase"><Link href="/">
                    <Image src="/next.svg" alt="SIA logo" width={60} height={40} />
                </Link></h1>
            </div>
            <ul className={"items-center flex flex-col md:flex-row gap-4 md:gap-10 md:h-auto md:visible transition-all" + toggleClasses}>
                <Link href="/"><NavItem >Home</NavItem></Link>
                <Link href="/projects"><NavItem >Projects</NavItem></Link>
                <Link href="/process"><NavItem >Process</NavItem></Link>
                <Link href="/about"><NavItem >about</NavItem></Link>
            </ul>
            <button className="visible md:invisible absolute right-10 top-4 px-0 py-0 w-7 h-7" onClick={() => { setToggle(!toggle) }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M2 5L2 7L22 7L22 5L2 5 z M 2 11L2 13L22 13L22 11L2 11 z M 2 17L2 19L22 19L22 17L2 17 z" fill="#5B5B5B" /></svg>
            </button>
        </nav>

    );
}

function NavItem({ children }) {
    return (
        <li className="font-bold text-md uppercase">
            <span>{children}</span>
        </li>);
}
