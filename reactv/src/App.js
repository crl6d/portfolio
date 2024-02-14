// App.js
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Footer from './components/footer/MainFooter.jsx';
import Blog from './components/blog/MainBlog.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/response.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="holder">
          <Switch>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <Header />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Footer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
