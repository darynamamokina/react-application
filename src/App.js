import './App.css';
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Company from './components/company';
import Cards from './components/cards';


function App() {
    return (
        <div className="App">
        <Navbar />
        <div className="purple-background"></div>
        <Company />
        <Cards />
        <Footer />
      </div>
      
    );
  }
  
  export default App;