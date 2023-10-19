import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SelectCategory from "./components/selectCategory";
import "./App.css";
import Main from "./components/Main";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="myApp">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/selectCategory" element={<SelectCategory />}></Route>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
// use private route for form and categories
