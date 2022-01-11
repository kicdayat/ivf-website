/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-10 py-10">
        <div className="bg-gray-100 shadow p-6"></div>
        <div className="bg-gray-100 shadow p-6"></div>
        <div className="bg-gray-100 shadow p-6"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
