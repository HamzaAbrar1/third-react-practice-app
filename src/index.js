import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
// import Layout from './Layout';
import AnotherPage, { fetchProducts } from "./AnotherPage";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(

    <>
  <Route path="/" element={<Layout />}>

    <Route path="" element ={<Home/>}/>
    <Route path="/about" element= {<About/>} />
    <Route path="/contact" element= {<Contact/>}/>
  </Route>

<Route path="/anotherPage" element= {<AnotherPage/>
}
loader={
  fetchProducts
}
>


</Route>





  </>
  
  )



);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
