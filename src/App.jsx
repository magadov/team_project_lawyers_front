import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import CategoryPage from './Pages/CategoryPage';

function App() {
  return (

    <div className='App'>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/categories" element={<CategoryPage/>} />
      <Route path="/" element={<HomePage/>} />
    </Routes>
    </div>
  );
}

export default App;
