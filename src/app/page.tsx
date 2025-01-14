import React from "react";
import Hero from "../components/homepage/hero";
import Cards from "../components/homepage/cards";
import Cards1 from "../components/homepage/cards1";
import Cards2 from "../components/homepage/cards2";
import Hero1 from "./Hero1";

export default function Page() {
  return (
    <div>
      <Hero />
      <Cards />
      <Cards1 />
      <Cards2 />
    /  <Hero1 />
    </div>
  );
}
