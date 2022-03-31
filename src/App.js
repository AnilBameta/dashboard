import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import HomeContainer from "./container/homeContainer/HomeContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListContainer from "./container/userListContainer/UserListContainer";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route path="/user" element={<UserListContainer />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
