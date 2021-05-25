import './App.css';
import NavBar from './components/NavBar'

import { useState, useContext } from 'react'
import { UserContext } from './contexts/UserContext'

import { Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import SignUpLogin from './components/SignupLogin'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Artists from './pages/Artists'
import Label from './pages/Label'
import Artist from './components/Artist'

function App() {
  const [user, setUser] = useContext(UserContext)

  return (
    <div className="App">
      <div className="NavBar">
        <NavBar />
      </div>

      <Route
       path="/"
       exact
       render={()=>{
         return <Home />
       }}
      />

<Route
       path="/signup"
       render={()=>{
        if(user.id){
          return <Redirect to ="/Artists" />
        } else {
         return <Signup />
        }
       }}
      />

      <Route
       path="/login"
       render={()=>{
         if(user.id){
          return <Redirect to ="/Artists" />
         } else{
          return <Login />
         }
       }}
      />

      <Route
       path="/Artists"
       render={()=>{
         if(user.id){
          return <Artists />
         } else{
          return <Redirect to ="/" />
         }
       }}
      />

      <Route
       path="/Label"
       render={()=>{
         if(user.id){
          return <Label />
         } else{
          return <Redirect to ="/" />
         }
       }}
      />

      <Route
        path="/Artist/:id"
        render={()=>{
          if(user.id){
            return <Artist />
          }else{
            return <Redirect to ="/" />
          }
        }}
      />


    </div>
  );
}

export default App;
