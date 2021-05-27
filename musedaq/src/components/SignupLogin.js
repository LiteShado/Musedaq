import axios from 'axios'
import env from 'react-dotenv'
import { useState } from 'react'


const SignupLogin = (props) => {
    console.log(props)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, {
            name,
            email,
            password
        })
            console.log(`${props.log}`);
            localStorage.setItem('userId', response.data.userId)
            localStorage.setItem('id', response.data.user.id)
            localStorage.setItem('email', response.data.user.email)
            localStorage.setItem('password', response.data.user.password)
            localStorage.setItem('name', response.data.user.name)

            window.location.reload()
    }

    return (
        <div className="signuplogin">
        <h1>{props.title}</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor="new-name"><h2>name</h2></label>
            <input value={name} onChange={(e)=> {setName(e.target.value) }} />

            <label htmlFor="new-email"><h2>email</h2></label>
            <input value={email} onChange={(e)=> {setEmail(e.target.value) }} />

            <label htmlFor="new-password"><h2>password</h2></label>
            <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value) }} />

            <button className="button" id="submit-button" type="submit" value={props.buttonText}><span>submit</span></button>

        </form>
        </div>
    )
}



export default SignupLogin
