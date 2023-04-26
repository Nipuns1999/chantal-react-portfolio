import React from "react";
import About from "./Components/About";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Card2 from "./Components/Card2";
import Welcome2 from "./Components/Welcome2";
import SocialMediaLinks from "./Components/Socialmedia";

function App() {
  return (
    <>
      <Welcome2></Welcome2>
      <About></About>
      <Card></Card>
      <br></br>
      <Card2></Card2>
      <br></br>
      <SocialMediaLinks></SocialMediaLinks>
      <Footer></Footer>
    </>
  );
}

export default App;
