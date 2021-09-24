import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menubar from './components/common/Navbar/Menubar';
import Footer from './components/common/Footer/Footer';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import { createContext, useState } from 'react';

export const OrderedShoe = createContext();


function App() {
  const [order, setOrder] = useState({});
  return (
    <OrderedShoe.Provider value={[order, setOrder]}>
      <Router >
        <Menubar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </OrderedShoe.Provider>
  );
}

export default App;
