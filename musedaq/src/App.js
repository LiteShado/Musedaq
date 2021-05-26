import './App.css';
import { useContext, useState } from 'react'
import { UserContext } from './context/UserContext';
import { Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Artists from './pages/Artists'
import Label from './pages/Label'
import Artist from './components/Artist'

function App() {

  const {userState, verifyUser} = useContext(UserContext)
  const [user] = userState

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
      <div className="NavBar">
        <Navbar setName={setName} setEmail={setEmail} setPassword={setPassword} />
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
