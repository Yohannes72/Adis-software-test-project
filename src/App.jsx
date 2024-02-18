import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import CreateS from './components/pages/CreateS';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import View from './components/pages/View';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/create" element={<CreateS />} />
        <Route path="/editSong/:id" element={<CreateS />} />
        <Route path="/viewSong/:id" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
