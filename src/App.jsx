import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Login = lazy(() => import("../src/Routes/Login"));
const Signup = lazy(() => import("../src/Routes/Signup"));
const Dashboard = lazy(() => import("../src/Routes/Dashboard"));
const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" Component={Login}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" Component={Signup}></Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" Component={Dashboard}></Route>
      </Routes>
    </Suspense>
  );
};

export default App;
