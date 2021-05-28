import axios from 'axios'
import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'



const Login = (props) => {
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
            localStorage.setItem('id', response.data.user.id)
            localStorage.setItem('email', response.data.user.email)
            localStorage.setItem('password', response.data.user.password)
            localStorage.setItem('name', response.data.user.name)
            // window.location.reload()
            setUser(response.data.user)
    }

    return (
        <div className="signuplogin container-login100 wrap-login100">
        <h1>{props.title}</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor="new-email"><h2>email</h2></label>
            <input className="signupInput" value={email} onChange={(e)=> {setEmail(e.target.value) }} />

            <label htmlFor="new-password"><h2>password</h2></label>
            <input className="signupInput"type="password" value={password} onChange={(e)=> {setPassword(e.target.value) }} />

            <button className="button" id="submit-button" type="submit" value={props.buttonText}><span>submit</span></button>

        </form>
        </div>
    )
}



export default Login
