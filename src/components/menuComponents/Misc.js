import React from "react";
import Card1 from "../BodyComponents/Card1";
import Card2 from "../BodyComponents/Card2";
import Card3 from "../BodyComponents/Card3";
import ProductsBoxComponent from "../BodyComponents/ProductsBoxComponent";
import ProjectAndTeams from "../BodyComponents/ProjectAndTeams";

export default function Misc() {
  return (
    <>
      <div className="misc_div">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
      <div className="misc_div2">
        <ProductsBoxComponent />
        <ProjectAndTeams />
      </div>
    </>
  );
}
