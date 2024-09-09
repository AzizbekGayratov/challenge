import React from "react";
import Categories from "./Categories";
import LotSold from "./LotSold";
import Hero from "./Hero";
import Brands from "./Brands";
import { Markets } from "./Markets";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <LotSold />
      <Brands />
      <Markets />
    </>
  );
}
