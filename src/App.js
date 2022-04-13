import Home from "./routes/home/home.component";
import {Routes,Route} from 'react-router-dom';
import Checkout from "./routes/checkout/checkout.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
 
  return (
   <Routes>
   <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>} />
      <Route path='contact' element={<Shop/>} />
      <Route path='Shop/*' element={<Shop/>} />
      <Route path='signIn' element={<Authentication/>} />
      <Route path='checkout' element={<Checkout/>}/>
   </Route>

   </Routes>
  );
};

export default App; 
