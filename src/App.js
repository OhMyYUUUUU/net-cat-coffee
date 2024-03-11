import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import TopOrder from './components/TopOrder';

function App() {
  return (
   <>
    <Navbar/>
    <MainContainer/>
    <TopOrder/>
   </>
  );
}

export default App;
