import "./App.css";
import Login from "./Components/LoginPage/Login";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Home/Navbar.jsx";
import Signup from "./Components/LoginPage/Signup";
import Footer from "./Components/Home/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <footer>
      <Footer />

      </footer>
    </div>
  );
}

export default App;
