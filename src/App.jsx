import React from "react";
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import Products from "./pages/Products";

function App() {
  return (
    <div className="h-full">
      <Navbar />
      <HomeScreen />  {/* Pass the reference */}
      <Products />
    </div>
  );
}

export default App;
