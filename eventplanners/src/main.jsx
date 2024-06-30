import React ,{ lazy }from 'react';
import { BrowserRouter ,  Route ,Routes } from 'react-router-dom' ;
import ReactDOM from 'react-dom/client';
import './output.css';
import LazyLayout from './components/Loader/LazyLayout';

const lazyLogin = lazy(() => import("./components/Login/Login"));
const lazySignup = lazy(() => import("./components/register/Signup"));
const lazyProfile = lazy(() => import("./components/Profile/Profile"));
const lazyBill = lazy(() => import("./components/SamplePage/Bill"));
const lazyHome = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
        <Route
        path="/"
        element={<LazyLayout component={lazyHome} />}
      />

        <Route
        path="/home"
        element={<LazyLayout component={lazyHome} />}
      />
        <Route
        path="/login"
        element={<LazyLayout component={lazyLogin} />}
      />
        <Route
        path="/profile"
        element={<LazyLayout component={lazyProfile} />}
      />
        <Route
        path="/signup"
        element={<LazyLayout component={lazySignup} />}
      /> 
        <Route
        path="/bill"
        element={<LazyLayout component={lazyBill} />}
      /> 

    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
