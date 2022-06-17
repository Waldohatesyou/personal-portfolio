import Helmet from 'react-helmet';
import './App.css';
import NavbarIcons from './components/NavbarIcons';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Helmet bodyAttributes={{class: "bg-body text-text font-poppins"}}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>

      </Helmet>
      <NavbarIcons></NavbarIcons>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/*' element={<Home></Home>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
