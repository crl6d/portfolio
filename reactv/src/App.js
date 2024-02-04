import './App.css';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';


import '../src/response.css';


function App() {
  return (
    <div className="App">

      <div className="holder">
      <Header />
      <Section1 />
      <Section2 />


      </div>
    </div>
  );
}

export default App;
