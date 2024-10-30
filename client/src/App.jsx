// import { useState } from 'react'
import "./App.css";
import { CardNews } from "./components/DisplayNews/CardNews";
import { Chips } from "./components/navFilter/Chips";
import { NavFilter } from "./components/navFilter/NavFilter";
import { DataProvider } from "./contex/DataProvider";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <header>
          <nav>
            <Link to="/">
              <h1>Scraping HackRank</h1>
            </Link>
            <NavFilter />
            <Chips />
          </nav>
        </header>
        <main>
          <section>
            <h2>News articles</h2>
            <CardNews />
          </section>
        </main>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
