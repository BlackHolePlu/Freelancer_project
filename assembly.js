import React from "react";
import Header from "./header/Header";
import Skilss from "./skilss/Skilss";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer/Footer";

function Assembly() {
  return (
    <div>
      <Header></Header>
      <Skilss></Skilss>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default Assembly;
