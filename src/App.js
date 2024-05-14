import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import CreateProfile from './Components/CreateProfile';
import EditProfile from './Components/EditProfile';
import AddExperience from './Components/AddExperience';
import AddEducation from './Components/AddEducation';
import Post from './Components/Post';
import Developer from './Components/Developer';
import ViewProfile from './Components/ViewProfile';
function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/profile' element={<CreateProfile/>}/>
      <Route path='/editprofile' element={<EditProfile/>}/>
      <Route path='/addexperience' element={<AddExperience/>}/>
      <Route path='/addeducation' element={<AddEducation/>}/>
      <Route path='/posts' element={<Post/>}/>
      <Route path='/developer' element={<Developer/>}/>
      <Route path='/viewprofile' element={<ViewProfile/>}/>

      



     </Routes>
    </div>
  );
}

export default App;
