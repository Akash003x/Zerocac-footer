import React from "react";
import Footer from "./components/footer";
import CustomCursor from "./components/customcursor";
import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <main className="main-content">
        
      </main>
      <Footer />
    </div>
  );
}

export default App;