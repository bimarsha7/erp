import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Reports from './pages/Reports';
import Products from './pages/Product';
import Team from './pages/Team';
import Signup from './pages/Signup';
import MenuItems from './components/MenuItems';
import Routes from './routes';

function App() {
  return (
    <>
      <Routes/>
    </>
  );
}

export default App;
