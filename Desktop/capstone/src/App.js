import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/home';
import SigninPage from './pages/signin';
import Login from './components/Signin/login';
import Success from './components/Signin/success';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={ <Home /> } exact />
          <Route path="/signin" element={ <SigninPage /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/success" element={ <Success /> } />
      </Routes>
    </Router>
  );
}

export default App;
