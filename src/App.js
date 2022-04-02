import Home from "./routes/home/home.component";
import {Routes,Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
 
  return (
   <Routes>
   <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>} />
      <Route path='contact' element={<Authentication/>} />
      <Route path='Shop' element={<Authentication/>} />
      <Route path='signIn' element={<Authentication/>} />
   </Route>

   </Routes>
  );
};

export default App; 
