import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CoreComponent from './components/CoreComponent';



function App() {
  return (
    <div className='app-container' style={{backgroundColor: "#f2e8cf"}}>
      <Header/>
      <CoreComponent/>
      <Footer/>
    </div>

   );
}

export default App;
