import React from "react";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import PopularItems from "../components/PopularItems";
import TrendingItems from "../components/TrendingItems";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PopularItems />
      <TrendingItems />
      <Testimonial />
    </Layout>
  );
};

export default Home;
