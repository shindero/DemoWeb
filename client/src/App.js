import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import Home from "./components/SidePages/Home/Home";
import Contact from "./components/SidePages/Contact/Contact";
import About from "./components/SidePages/About/About";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;