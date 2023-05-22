import React from "react";
import PreSection from "../PreSection/PreSection";
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
      {/* <Main /> */}
      <PreSection />
    </div>
  );
};

export default Index;
