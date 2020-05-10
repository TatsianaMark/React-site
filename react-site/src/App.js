import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Container from "react-bootstrap/Container";


function App() {
  return (
      <>
          <div className="App">
              <Header/>
              <Footer/>
          </div>
      </>
  );
}

export default App;
