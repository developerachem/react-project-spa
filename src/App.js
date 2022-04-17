import { BrowserRouter , Routes , Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Profile from "./Components/Home/Profile/Profile";
import EditProfile from "./Components/Home/Profile/EditProfile/EditProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/admin" element={ <Admin /> }></Route>
          <Route path="/regstration" element={ <Login /> }></Route>
          <Route path="/profile/:id" element={ <Profile /> } ></Route>
          <Route path="/profile/:id/edit" element={ <EditProfile /> } ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
