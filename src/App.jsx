import './App.css'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import Hobbies from './components/Hobbies'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import IntroLogo from './components/IntroLogo'
import { useState, useEffect } from 'react'

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (showLogo) {
    return (
      <div
        className='intro-logo-screen'
      >
        <IntroLogo />
      </div>
    );
  }
  return (
    <Layout>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Layout>
  );
}

export default App;
