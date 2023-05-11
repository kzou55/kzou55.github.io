import React from "react";
import Layout from "@/components/Layout";
import About from "@/components/About";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-around">
        <Heading/>
        <About/>
      </div>
    </Layout>
  )
}
