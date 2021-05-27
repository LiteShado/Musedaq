import './App.css';
import { useContext } from 'react'
import { UserContext } from './context/UserContext';
import { Route, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import LoginPage from './pages/LoginPage'
import AllArtists from './pages/AllArtists'
import OneArtist from './pages/OneArtist'
import Label from './pages/Label'

function App() {

  const [user] = useContext(UserContext)
  // const [user, setUser] = userState

  // const getUserInfo = async () => {
  //   const userId = localStorage.getItem('userId')
  //   try {
  //     let user = await axios.get('http://localhost:3001/users' ,{
  //     headers:{
  //       authorization: userId
  //     }
  //   })
  //   if(user.data.user) {
  //     setUser(user.data)
  //   }
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  // useEffect(() => {
  //   getUserInfo()
  // },[])

  return (
    <div className="App">
      <div className="NavBar">
        <Navbar />
      </div>

      <Route
       path="/"
       exact
       render={()=>{
        if(user){
        return <Redirect to ="/allartists" />
        } else {
        return <Home />
        }
       }}
      />

      <Route
       path="/signup"
       render={()=>{
        if(user){
          return <Redirect to ="/allartists" />
        } else {
         return <Signup />
        }
       }}
      />

      <Route
       path="/login"
       render={()=>{
         if(user){
          return <Redirect to ="/allartists" />
         } else{
          return <LoginPage />
         }
       }}
      />

      <Route
       path="/allartists"
       render={()=>{
         if(user){
          return <AllArtists />
         } else{
          return <Redirect to ="/" />
         }
       }}
      />

      <Route
       path="/label"
       render={()=>{
         if(user){
          return <Label />
         } else{
          return <Redirect to ="/" />
         }
       }}
      />

      <Route
        path="/artist/:id"
        render={()=>{
          if(user){
            return <OneArtist />
          }else{
            return <Redirect to ="/" />
          }
        }}
      />


    </div>
  );
}

export default App;
