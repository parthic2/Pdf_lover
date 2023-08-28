import React, { useEffect, lazy } from "react";
const PreSection = lazy(() => import("../PreSection/PreSection"));
const Banner = lazy(() => import("./Banner/Banner"));
const Main = lazy(() => import("./Main"));

const Index = () => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "PDFLover | Online PDF Tools";
  }, []);

  return (
    <div>
      <Banner />
      <Main />
      <PreSection />
    </div>
  );
};

export default Index;
