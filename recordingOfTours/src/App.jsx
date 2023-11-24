import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import MyTours from './MyTours'
import Create from './Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TourDetails from './TourDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<MyTours />} />
            <Route path="/create" element={<Create />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
