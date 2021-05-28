import './App.css';
import { useContext, useEffect } from 'react'
import { UserContext } from './context/UserContext';
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import LoginPage from './pages/LoginPage'
import AllArtists from './pages/AllArtists'
import OneArtist from './pages/OneArtist'
import MyLabel from './pages/MyLabel'
import MyProfile from './pages/MyProfile'
import Label from './pages/Label'

function App() {

  const [user, setUser] = useContext(UserContext)
  // const [user, setUser] = userState

  const getUserInfo = async () => {

    const id = localStorage.getItem('id')
    try {
      let user = await axios.post(`${process.env.REACT_APP_API_URL}/users/profile` ,{
              id: id
      }
    )
    if(user.data.user) {
      setUser(user.data)
    }
    } catch (error) {
      console.log(error)
    }

  }
  console.log(user)

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div className="App">
      <div className="NavBar">
        <Navbar />
      </div>

      <Route
       path="/"
       exact
       render={()=>{
        if(user.id){
        return <Redirect to ="/allartists" />
        } else {
        return <Home />
        }
       }}
      />

      <Route
       path="/signup"
       render={()=>{
        if(user.id){
          return <Redirect to ="/allartists" />
        } else {
         return <Signup />
        }
       }}
      />

      <Route
       path="/home"
       render={()=>{
        if(user.id){
          return <Redirect to ="/allartists" />
        } else {
         return <Home />
        }
       }}
      />

      <Route
       path="/login"
       render={()=>{
         if(user.id){
          return <Redirect to ="/allartists" />
         } else{
          return <LoginPage />
         }
       }}
      />

      <Route
       path="/allartists"
       render={()=>{
         if(user.id){
          return <AllArtists />
         } else{
          return <Redirect to ="/" />
         }
       }}
      />

      <Route
       path="/label"
       render={()=>{
         if(user.id){
          return <MyLabel />
         } else{
          return <Redirect to ="/label" />
         }
       }}
      />

      <Route
       exact
       path="/newlabel">
      <Label />
      </Route>

      <Route
       path="/myprofile"
       render={()=>{
         if(user.id){
          return <MyProfile />
         } else{
          return <Redirect to ="/myprofile" />
         }
       }}
      />

      <Route
      path="/artist/:id"
      render={(routingId)=>{
         if(user){
          return <OneArtist id={routingId.match.params.id}/>
         } else{
          return <Redirect to ="/" />
         }
       }}
      />

    </div>
  );
}

export default App;
