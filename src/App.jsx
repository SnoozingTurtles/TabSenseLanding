import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import Products from "./pages/Products";

function App() {
  return (
    <div className="h-full overflow-x-hidden">
        <Navbar />
        <HomeScreen />
        <Products />
    </div>
  );
}

export default App;
