import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from './components/Main/Main';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Menu />

      <div className="main-layout">
        <Sidebar />
          <Main />
      </div>
    </div>
  );
}

export default App;
