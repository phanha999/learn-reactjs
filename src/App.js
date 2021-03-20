import './App.css';
import React, { useEffect } from 'react';
// import ColorBox from './components/ColorBox';
// import Counter from './components/Counter';
import Album from './features/Album';
import TodoFeatures from './features/Todo';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from "./components/NotFound";
import productApi from './api/productApi';
import CounterFeatures from './features/Counter';
import Header from './components/Header';

function App() {
  //Cách Gọi Api cho Product với số lượng Product la 10
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      }
      const getDataProduct = await productApi.getAll(params);
      console.log(getDataProduct);
    }
    fetchProduct();
    return () => {
      
    }; 
  }, [])
  //Cách Gọi Api cho Product

  return (
    <div className="App">
      <Header/>


      {/* <ColorBox/>
      <Counter/> */}
      {/* <Album/> */}
      {/* <TodoFeatures/> */}

      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Redirect from="/post-list/:postID" to="/post/:postID" exact/>

        <Route path="/" component={CounterFeatures} exact/>
        <Route path="/todo-list" component={TodoFeatures} />
        <Route path="/albums" component={Album} />

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
