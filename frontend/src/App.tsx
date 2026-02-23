import './App.css';
import AppNavbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Home from './pages/Home';
function App() {
  return (
    <>
      <AppNavbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;


