import React from "react";
import Link from "next/link";

const NavBar = () => {
    return (
      <div className="m-5 float-right">
        <ul className="md:flex">
          <Link href={'/'}>
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href={'/projects'}>
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href={'/contact'}>
            <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
          </Link>
        </ul>
      </div>
    )
}

export default NavBar