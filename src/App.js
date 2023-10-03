import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={MainPage}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
