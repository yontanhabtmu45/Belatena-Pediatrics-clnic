import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Exp from './Pages/Exp/Exp';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Exp />
      <Services />
      <Footer/>
    </div>
  );
}

export default App;
