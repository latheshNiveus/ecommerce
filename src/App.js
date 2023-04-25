import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar';
import Home from './pages/home';
import {Cart} from './pages/cart';
import {Wishlist} from './pages/wishlist';

import { ShopContextProvider } from "./context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
