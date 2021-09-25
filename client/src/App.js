import NavBar from './components/NavBar/';
import Sidebar from './components/Sidebar/';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main"
import './App.css';
import UserGroup from './pages/UserGroup';
import Submit from './pages/Submit';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Main} />
        <Route exact path="/userGroup" component={UserGroup} />
        <Route exact path="/submit" component={Submit} />
      </Router>
    </div>
  );
}

export default App;
