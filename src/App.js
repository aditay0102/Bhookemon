
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Footer from './components/Footer';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.jsx';
import { CartProvider } from './components/ContextReducer.js';
import MyOrders from './screens/MyOrders.js';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path='login' element={<Login/>}/>
            <Route exact path='createUser' element={<Signup/>}/>
            <Route exact path='myOrder' element={<MyOrders/>}/>
        </Routes>
        <Footer/>
      </div>
    </CartProvider>
  );
}

export default App;
