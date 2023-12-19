import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import MyTours from './Pages/Tours/MyTours'
import Create from './Pages/NewTourForm/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TourDetails from './Pages/Tours/TourDetails';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tours" element={<MyTours />} />
            <Route path="/create" element={<Create />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
