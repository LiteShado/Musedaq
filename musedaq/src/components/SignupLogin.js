import axios from 'axios'
import { useState } from 'react'


const SignupLogin = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}${props.route}`, {
            name,
            email,
            password
        })
        .then((response) => {
            console.log(`${props.log}`);
            localStorage.setItem('userId', response.data.userId)
            window.location.reload()
        })
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
