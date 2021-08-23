import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Navigation from './page/Navigation';
import Header from './page/Header';
import Footer from './page/Footer';
import About from './page/components/About';
import Portfolio from './page/Portfolio';
import Contact from './page/components/Contact';

function App() {
  return (
   <>
    <Router>
     <Navigation />
     <Header />
     {/* Content goes here */}

     <Switch>
       <Route exact path="/">
         <About />
       </Route>
       <Route exact path="/portfolio">
         <Portfolio />
       </Route>
       <Route exact path="/contact">
         <Contact />
       </Route>
     </Switch>

     <Footer />
    </Router>
   </>
  );
}

export default App;
