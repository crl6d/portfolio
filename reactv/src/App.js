import './App.css';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Footer from './components/footer/MainFooter.jsx';
import Blog from './components/blog/Blog';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/response.css';


function App() {
  return (
      <div className="App">
        <div className="holder">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Footer />
        </div>


      </div>

        
    
  );
}

export default App;