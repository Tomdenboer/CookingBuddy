import './App.css';
import Home from './Pages/Home.js'
import Recipes from './Pages/Recipes.js'
import NavBar from './Common/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="recipes" element={<Recipes/>}/>
        </Routes> 
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
