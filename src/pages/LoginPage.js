

import Login from '../components/Login'

const LoginPage = (props) => {
    return(
        <div>
            <div className="loginContainer">
                <Login className="input"
                buttonText="Log In to Musedaq"
                route="/users/login"
                log="Login Successful"
                title="Login to Musedaq"
                />
            </div>
        </div>
    )
}



export default LoginPage
