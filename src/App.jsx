import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import Products from "./pages/Products";
import Demo from "./pages/Demo";

function App() {
  const demoRef = useRef(null);

  return (
    <div className="h-full">
      <Navbar />
      <HomeScreen demoRef={demoRef} />  {/* Pass the reference */}
      <Products />
      <Demo ref={demoRef} /> {/* Attach reference to Demo section */}
    </div>
  );
}

export default App;
