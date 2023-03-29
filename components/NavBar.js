import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
      <div className="flex justify-end m-5">
        <Link href={'/'} className="ml-10 text-sm uppercase hover:border-b">Home</Link>
        <Link href={'/projects'} className="ml-10 text-sm uppercase hover:border-b">Projects</Link>
        <Link href={'/assets/Resume.pdf'} className="ml-10 text-sm uppercase hover:border-b">Resume</Link>
      </div>
    )
}

export default NavBar