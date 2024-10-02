// import { useState } from 'react'
import "./App.css";
import { CardNews } from "./components/DisplayNews/CardNews";
import { DataProvider } from "./contex/DataProvider";

function App() {
  return (
    <DataProvider>
      <main>
        <h1>Scraping HackRank</h1>
        <CardNews />
      </main>
    </DataProvider>
  );
}

export default App;
