import React from 'react';

import {createStore } from 'redux';

import { Provider } from 'react-redux'

import HomeScreen from "./screens/HomeScreen"

import AppNavigator from './Nav.js'

import BottomTab from './Nav'


const reducer = (state = {menu: "closeMenu"}, action) => {

  // if(action.type == "OPENMENU")
  // {
  //   return {menu : "openMenu"};
  // }
  // else if(action.type == "CLOSEMENU")
  // {
  //   return {menu: "closeMenu"};
  // }

   switch(action.type)
   {
     case "OPENMENU":
       return {menu : "openMenu"};

     case "CLOSEMENU":
       return {menu: "closeMenu"};
      
      default:
        return state;
   }

 


}

const database = createStore(reducer);

const App = () => (

  <Provider store = {database} >

      <AppNavigator/>
 
   </Provider>
)

export default App;