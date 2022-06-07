import Helmet from 'react-helmet';
import './App.css';
import Navbar from './components/Navbar';
import NavbarIcons from './components/NavbarIcons';

function App() {
  return (
    <div className="App">
      <Helmet bodyAttributes={{class: "bg-body text-white font-poppins"}}>
      

      </Helmet>
      
    <NavbarIcons></NavbarIcons>
    
    </div>
  );
}

export default App;
