import './App.css';
import AppNavbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
  <AppNavbar />
    <div className="container mt-5">
      <h1 className="text-primary">Nova Scotia Ale 🍺</h1>
      <button className="btn btn-success mt-3">
        Explore Beers
      </button>
    </div>
    </>
  );
}

export default App;


