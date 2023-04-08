import React from "react";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Image from 'next/image'
import profilePic from '../public/assets/profilepic.jpg'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-row justify-around">
        <About/>
        <Image src={profilePic} alt="" className="w-80"/>
      </div>
    </Layout>
  )
}
