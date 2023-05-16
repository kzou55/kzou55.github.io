import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
      <div className="flex justify-end m-10 me-10">
        <Link href={'/'} className="ml-3 md:ml-10 text-xs md:text-sm uppercase hover:border-b">Home</Link>
        <Link href={'/projects'} className="ml-3 md:ml-10 text-xs md:text-sm uppercase hover:border-b">Projects</Link>
        <Link href={'/assets/Resume.pdf'} className="ml-3 md:ml-10 text-xs md:text-sm uppercase hover:border-b">Resume</Link>
        <div className="ml-3 md:ml-10 text-xs md:text-sm hover:border-b">
          <FontAwesomeIcon icon={faEnvelope} className="me-1"/>
          kzou55@gmail.com
        </div>
      </div>
    )
}

export default NavBar