import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Navigation";
import About from "./components/About";
import Store from "./components/Store";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="content-container">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={""}/>
            <Route path="/tienda" element={<Store />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
)}

export default App;
