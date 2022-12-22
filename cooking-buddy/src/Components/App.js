import './App.css';
import Home from './Pages/Home.js'
import Recipes from './Pages/Recipes.js'
import NavBar from './Common/NavBar';
import {Routes, Route} from 'react-router-dom'
import SelectedRecipe from './Pages/SelectedRecipe';
import Register from './Pages/Register';
import LogIn from './Pages/LogIn';
import Questionnaire from './Pages/Questionnaire';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/questionnaire" element={<Questionnaire/>}></Route>
          <Route path="recipes" element={<Recipes/>}/>
          <Route path="recipes/:id" element={<SelectedRecipe/>}/>
          <Route path={"register"} element={<Register/>} />
          <Route path={"signin"} element={<LogIn/>} />
        </Routes> 
    </div>
  );
}

export default App;
