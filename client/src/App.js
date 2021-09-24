import NavBar from './components/NavBar/';
import Sidebar from './components/Sidebar/';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main"
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
