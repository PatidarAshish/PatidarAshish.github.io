import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SplitScreen from './components/SplitScreen';
import About from './components/About';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <ScrollToSection /> {/* Smooth scroll handler */}

          <Switch>
            {/* Default route: Redirect / to /home */}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/home">
              <SplitScreen />
              <About />
            </Route>

            <Route path="/journey" component={Journey} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blogs" component={Blogs} />
          </Switch>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
