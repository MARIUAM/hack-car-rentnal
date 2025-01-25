import React from "react";
import Hero from "../components/homepage/hero";
import Cards from "../components/homepage/cards";
import Cards2 from "../components/homepage/cards2";
import Hero1 from "./Hero1";
import Hero2 from "./hero2";
import Hero3 from "./hero3";
import Hero4 from "./hero4";





export default function Page() {
  return (
    <div>
      <Hero />
      <Hero1 />
      <Hero2/>
      <Hero3/>
      <Hero4/>
      {/* <Cards/> */}
     <Cards/>                                                                                                                    
      <Cards2 />
     
     
    {/* <CommentSection /> */}

      <div>
        <script
          src="//code.tidio.co/r2vfhhqwfnszgnkbuf0vyw5njhaiqieu.js"
          async
        ></script>
      </div>
  
   
    </div>
  );
}
