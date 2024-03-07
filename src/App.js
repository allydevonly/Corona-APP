import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Conseil from './pages/Conseil.jsx';
import Errormain from './pages/error.jsx';
import Entry from './pages/entry.jsx';
import Quize from './pages/quize.jsx';
import Result41 from './pages/Result.jsx';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
          <Route path="/cntn" element={<Entry />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/erro" element={<Errormain />} />
          <Route path="/Conseil" element={<Conseil />} />
            <Route path="/test" element={<Quize />} />
            <Route path="/result55" element={<Result41 />} />

          

          
          <Route path="*" element={<Navigate to="/Home" replace />} />    
          
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
