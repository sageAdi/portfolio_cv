import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ReactParticle from "./components/React Particle/ReactParticle";

function App() {
  return (
    <>
      <ReactParticle />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
