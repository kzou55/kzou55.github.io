import React from "react";
import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Title from "@/components/Title";
import About from "@/components/About";

export default function Home() {
  return (
    <Layout>
      <Title/>
      <About/>
    </Layout>
  )
}
