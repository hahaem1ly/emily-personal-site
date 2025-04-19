import './App.css'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import Hobbies from './components/Hobbies'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
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
