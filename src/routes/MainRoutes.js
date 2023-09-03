
import Home from '../pages/Home';
import Profile from '../pages/Profile';


import  {Routes, Route} from 'react-router-dom';

export default function MainRoutes() {
  return (
   <Routes>

    <Route path='/'element={<Home/>}/>
    <Route path='/profile'element={<Profile/>}/>
   

   </Routes>
  )
}
