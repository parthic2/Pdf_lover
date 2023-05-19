import React from "react";
import PreSection from "../PreSection/PreSection";
// import SolutionSection from "../SolutionSection/SolutionSection";
// import TrustSection from "../TrustSection/TrustSection";
import Banner from "./Banner/Banner";
import Main from "./Main";
import { useEffect } from "react";

const Index = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "PDFLover | Online PDF Tools";
  }, []);

  return (
    <div>
      <Banner />
      <Main />
      {/* <SolutionSection />
      <TrustSection /> */}
      <PreSection />
    </div>
  );
};

export default Index;
