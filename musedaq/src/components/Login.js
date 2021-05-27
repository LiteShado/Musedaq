import axios from 'axios'
import env from 'react-dotenv'
import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'



const Login = (props) => {
    console.log(props)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user,setUser] = useContext(UserContext)


    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
            email,
            password
        })
            console.log(`${props.log}`);
            console.log(user)
            console.log(response)
            localStorage.setItem('userId', response.data.userId)
            window.location.reload()
            setUser(response.data.user)
    }

    return (
        <div className="signuplogin">
        <h1>{props.title}</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor="new-email"><h2>email</h2></label>
            <input value={email} onChange={(e)=> {setEmail(e.target.value) }} />

            <label htmlFor="new-password"><h2>password</h2></label>
            <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value) }} />

            <button className="button" id="submit-button" type="submit" value={props.buttonText}><span>submit</span></button>

        </form>
        </div>
    )
}



export default Login