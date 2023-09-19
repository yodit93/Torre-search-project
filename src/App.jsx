import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genome from "./components/Genome";
import Navigation from "./components/Navigation";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/torre-search-project/" element={<Search />}/>
          <Route path="/torre-search-project/genome/:id" element={<Genome />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
