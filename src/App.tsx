import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Notes } from "./components/Notes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
