import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-cover p-5">
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
