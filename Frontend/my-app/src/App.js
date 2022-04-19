import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import CrescatorHome from './Components/CrescatorHome';
import ViewConcursuri from './Components/ViewConcursuri';
import ViewCrescatori from './Components/ViewCrescatori';
import ViewPorumbei from './Components/ViewPorumbei';
import Login from './Components/Login';
import AdminHome from './Components/AdminHome';
import EditProfile from './Components/EditProfile';
import { viewPorumbei } from './Services/PorumbelService';
import CreatePorumbel from './Components/CreatePorumbel';
import UpdatePorumbel from './Components/UpdatePorumbel';
import SearchConcursuri from './Components/SearchConcursuri';
import ViewFavorite from './Components/ViewFavorite';
function App() {
  const [idCrescator, setIdCrescator] = useState();
  const [porumbei, setPorumbei] = useState();
  const setTheId = (id) => {
    setIdCrescator(id);
  }
  useEffect(() => {
    viewPorumbei().then((res) => {
      setPorumbei(res.data);
    }); 
  },[]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/crescator" element = {<CrescatorHome theId = {idCrescator} ></CrescatorHome>}></Route>
          <Route exact path = "/" element = {<Login usrLogg={setTheId} />}/>
          <Route exact path = "/admin" element = {<AdminHome></AdminHome>}/>
          <Route exact path = "/crescator/concursuri" element = {<ViewConcursuri></ViewConcursuri>}></Route>
          <Route exact path = "/crescator/porumbei" element = {<ViewPorumbei theId = {idCrescator}></ViewPorumbei>}/>
          <Route exact path = "/admin/crescatori" element = {<ViewCrescatori></ViewCrescatori>}/>
          <Route exact path = "/crescator/editProfile" element = {<EditProfile theId={idCrescator}/>}/>
          <Route exact path = "/crescator/createPorumbel" element = {<CreatePorumbel theId = {idCrescator}></CreatePorumbel>}/>
          <Route exact path = "/crescator/updatePorumbel" element = {<UpdatePorumbel theId = {idCrescator} />}/>
          <Route exact path = "/crescator/concurs/search" element = {<SearchConcursuri ></SearchConcursuri>} />
          <Route exact path = "/crescator/favorite" element = {<ViewFavorite theId = {idCrescator}></ViewFavorite>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
