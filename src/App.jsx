import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Create from "./component/Create";
import Product from "./component/Product";
import Basket from "./component/Basket";
import Favorite from "./component/Favorite";

const App = () => {
  let routes = [
    { id: 1,
       link: "/", 
       element: <Home />
       }, {
        id: 2,
       link: "/create", 
       element: <Create />
       }, {
        id: 3,
       link: "/product", 
       element: <Product />
       }, {
        id: 4,
       link: "/basket", 
       element: <Basket />
       }, {
        id: 5,
       link: "/favorite", 
       element: <Favorite />
       }];

  return (
    <div>
      <Header />
      <Routes>
       {routes.map((el)=>(
        <Route path={el.link} element={el.element} key={el.id}/>
       ))}
      </Routes>
    </div>
  );
};

export default App;
