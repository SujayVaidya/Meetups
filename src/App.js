import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetup";
import NewMeetupsPage from "./Pages/NewMeetup";
import FavoritesPage from "./Pages/Favorites";
import MainNavigation from './Components/MainNavigation';
import Layout from './Components/Layout';


function App() {
   
  return (
   <Layout>
   <Routes>
   <Route exact path='/' element = { <AllMeetupsPage/> }>
      
   </Route>
   <Route path='/new-meetup' element = { <NewMeetupsPage/> }>
    
   </Route>
   <Route path='/favorites' element = { <FavoritesPage/> }>
    
   </Route>
   
   </Routes>
   
   </Layout>
  );
}

export default App;
