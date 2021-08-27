import "./App.css";
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import newsData from "./data/newsdata.json";
// import Home from "./page/Home";
// import News from "./page/News";
// import Header from "./components/Header.jsx";
// import { getNews } from "./services/getNews";
// import Banners from "./page/Banners";
// import Selectors from "./components/Selectors";
// import Lists from "./components/Lists";
// import HiddenComp from "./components/Hidden";
import Container from "./components/Container";

function App() {
  


  return (
    <Container />
    // <div className="App">
    //   <Router>
    //     <Header />
    //     <Switch>
    //       <Route path="/news/:newsId">
    //         <div className="container m-0 p-0">
    //           <div className="row">
    //             <News articles={newsList} />
    //             <Banners />
    //           </div>
    //         </div>
    //       </Route>
    //       <Route path="/">
    //         <div className="container">
    //           <div className="leftPanel">
                
    //             <Selectors country={country} setCountry={setCountry} category={category} setCategory={setCategory} setNewsList={setNewsList} setisLoading={setisLoading} />
    //             <Lists />
    //             <HiddenComp />
    //             <Home news={newsList} />
    //           </div>
    //           <div className="rightPanel">
    //             <Banners />
    //           </div>
    //         </div>
    //       </Route>
    //     </Switch>
    //   </Router>
    // </div>
  );
}

export default App;
