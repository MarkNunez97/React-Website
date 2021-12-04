import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*All our Routes goes here!*/}
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/:id" element={<Project/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
