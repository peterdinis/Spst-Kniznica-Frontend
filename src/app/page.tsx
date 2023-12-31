import { NextPage } from "next";
import Hero from "./components/home/Hero";
import Footer from "./components/shared/Footer";
import Services from "./components/home/Services";

const Homepage: NextPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Footer />
    </>
  )
}

export default Homepage;