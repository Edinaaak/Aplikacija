import Navbar from './Navbar';
import Home from './Home';
import Line from './line';
import About from './About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Login from './Login';
import NotFound from './NotFound';
import Create from './Create';
import Fleet from './Fleet';
import Contact from './Contact';

function App() {
  return (
    <Router>
    <div className="App">
        <Line/>
         <Navbar/>
      <div className="content">
      <Switch>
        <Route exact path="/"> 
          <Home/>
        </Route>
        <Route path="/about"> 
          <About/>
        </Route>
        <Route path="/blogs/:id"> 
          <BlogDetails/>
        </Route>
        <Route path="/login"> 
          <Login/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/fleet">
          <Fleet/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
        <Route path="*">
          <NotFound/>
        </Route>
        </Switch>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
