import logo from './logo.svg';
import './App.css';
import Bg from './images/Bg.png'
import NavBar from './Components/NavBar';
import Content from './Components/Content';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${Bg})`, minHeight:"100vh", minWidth:"100vw", maxHeight:"100vh",backgroundSize:" 100vw 100vh"}}>
      <NavBar/>
      <Content/>
    </div>
  );
}

export default App;
