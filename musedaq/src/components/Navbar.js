import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const NavBar = (props) => {
    const [user, setUser] = useContext(UserContext)

    const logout = () => {
        localStorage.clear()
        setUser('')
    }

    return(
        <div className="Nav">
        <nav>
        <Link className="Nav" to="/">Home</Link>{' | '}

    {user.id ?
    <>
    <div className="navbar">
        <Link className="Nav" to="/allproducts">Artists</Link>{' || '}
        <Link className="Nav" to="/mycart">My Label</Link>{' || '}
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
        <Link to="/Signup">Sign Up</Link>{' || '}
        <Link to="/Login">Login</Link>
    </>
    }
    </nav>
    </div>
    )
}

export default NavBar
