import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./components/context/AuthContext";
import CreateAcount from "./components/createAcount/CreateAcount";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth=({children})=>{
    return currentUser ? children: <Login />
  }

  
  console.log(currentUser);
  return (
    <div className="container">
      <Routes>
      <Route path="/">
         <Route index element={<RequireAuth><Home /></RequireAuth>} />
         <Route path="login" element={<RequireAuth><Home /></RequireAuth>} />
         <Route path="about" element={<About />} />
         <Route path="register" element={<CreateAcount />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
