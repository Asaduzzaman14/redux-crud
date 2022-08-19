import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddPost from './components/AddPost';
import Home from './components/Home';
import Navbar from './components/Navbar';
import store from './store/store';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Update from './components/Update';

function App() {


  return (
    <Provider store={store}>

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addPost' element={<AddPost />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/updatePost/:id' element={<Update />}></Route>


      </Routes>

    </Provider>
  );
}

export default App;
