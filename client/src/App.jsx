import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./pages/Home/Home.jsx";
import UserList from "./pages/User/UserList.jsx";
import CreateUser from "./pages/User/CreateUser.jsx";

// * Client App Router
const App = () => {
  return (
    <>
      {/* Context Providers go above here */}
      {/* Global layout components go here */}
      <Nav />
      {/* AppRoutes could also be handled in a different file, and later imported here. */}
      <Routes>
        {/* Pages go here */}
        <Route path="/" element={<Home />} />
        <Route path="/user/list" element={<UserList />} />
        <Route path="/user/create" element={<CreateUser />} />
      </Routes>
    </>
  );
};

export default App;
