import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/signUp';
import Login from './components/login';
import CreateProduct from './components/createProduct';
import CreateFeatures from './components/createFeatures';
import DisplayProducts from './components/displayProducts';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/createProduct" element={<CreateProduct/>}/>
            <Route path="/createFeatures" element={<CreateFeatures/>}/>
            <Route path="/displayProducts" element={<DisplayProducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
