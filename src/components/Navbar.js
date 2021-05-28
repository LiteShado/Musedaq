import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const NavBar = (props) => {
    const [user, setUser] = useContext(UserContext)
    const [myLabel,setMyLabel] = useState('')

    console.log(user)

    const fetchLabel= async () =>{
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/label/mylabel`,{
                userId: user.id
            })
            console.log(response)
            setMyLabel(response.data.userLabel)

        } catch (error) {
            console.log({error});
        }

    }

    useEffect(() => {
        fetchLabel()
    }, [])


    return(
        <div className="Nav">
        <nav>
        <Link className="Nav" to="/">Home</Link>{' | '}


    {user.id ?
    <>
    <div className="navbar">
        <Link className="Nav" to="/allartists">Artists</Link>{' || '}
        <Link className="Nav" to="/myprofile">My Profile</Link>{' || '}

        <Link className="Nav" to="/newlabel">Make A Label</Link>{' || '}
        <Link className="Nav" to="/label">My Label</Link>{' || '}

        <Link className="Nav" to="/"
            onClick={() => {
                localStorage.removeItem('userId')
                localStorage.clear()
                setUser('')
            }}
        >Logout</Link>
    </div>

    </>

    :

    <>
        <Link to="/Home">Home</Link>{' | '}
        <Link to="/Signup">Sign Up</Link>{' | '}
        <Link to="/Login">Login</Link>
    </>
    }
    </nav>
    </div>
    )
}

export default NavBar
