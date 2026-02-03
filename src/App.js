import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Menu />

      <div className="main-layout">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
