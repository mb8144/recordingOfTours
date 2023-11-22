import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TourDetails from './TourDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/tours/:id" element={<TourDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
