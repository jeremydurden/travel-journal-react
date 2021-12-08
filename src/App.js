import "./styles.css";

//COMPONENTS
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
