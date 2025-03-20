import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Exp from './Pages/Exp/Exp';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Exp />
      <Services />
      <Doctors />
      <Footer/>
    </div>
  );
}

export default App;
