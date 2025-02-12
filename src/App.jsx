import { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <div>
        <HomePage />
        <Analytics />
      </div>
    </>
  );
}

export default App;