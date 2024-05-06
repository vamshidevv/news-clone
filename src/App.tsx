import "./SASS/Style.scss"; // Correct relative import
import Navbar from "./Components/NavBar";
import Contents from "./Components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contents />
    </div>
  );
}

export default App;
