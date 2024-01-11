import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {
  trending,
  originals,
  action,
  comedy,
  horror,
  romance,
  documenteries,
} from "./url";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <RowPost title={"Trending"} url={trending} />
        <RowPost title={"Netflix Originals"} url={originals} />
        <RowPost title={"Action"} url={action} />
        <RowPost title={"Comedy"} url={comedy} />
        <RowPost title={"Horror"} url={horror} />
        <RowPost title={"Romance"} url={romance} />
        <Footer />
      </div>
      <div></div>
    </>
  );
}

export default App;
