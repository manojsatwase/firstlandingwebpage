import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route>
            <Navbar />
          </Route>
        </Switch>
        <Hero />
        <Articles />
        <Articles />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
