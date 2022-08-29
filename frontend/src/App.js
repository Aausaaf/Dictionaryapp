import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import {Routes , Route} from 'react-router-dom'
import { Navbar } from './Component/Navbar/Navbar';
import {Searchcontexts} from './context/searchcontext'
function App() {
  return (
    <>
    <Searchcontexts> {/* wraping component so we can pass context api data to all component */}
   <Navbar/>
  
      <Routes>
      <Route path='/' element={ <Home/>}/> 
      </Routes>
      </Searchcontexts>
    </>
  );
}

export default App;
