import Helmet from 'react-helmet';
import './App.css';
import NavbarIcons from './components/NavbarIcons';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{class: "bg-body text-text font-poppins"}}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>

      </Helmet>
      
    <NavbarIcons></NavbarIcons>
    <Hero></Hero>
    
    </div>
  );
}

export default App;
