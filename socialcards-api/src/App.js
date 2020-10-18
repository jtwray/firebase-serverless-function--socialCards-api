import React, { useState } from "react";
import "./App.css";
import MarkdownContainer from "./components/MarkdownContainer";
import LinkPreview from "./LinkPreview.js";

function App() {
  return (
    <div className="App">
      <LinkPreview />
      <MarkdownContainer />
    </div>
  );
}

export default App;
