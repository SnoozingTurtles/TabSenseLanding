import React from "react";
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import Products from "./pages/Products";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <HomeScreen />  {/* Pass the reference */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
