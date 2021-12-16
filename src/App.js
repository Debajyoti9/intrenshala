import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route>404 Not Found!</Route>
        </Routes>
    </Router>    
    </div>
  );
}

export default App;
