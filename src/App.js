import "./App.css";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import About from './components/About.js'
import FAQ from './components/FAQ.js'
import NotFound from './components/NotFound.js'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Learn React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;