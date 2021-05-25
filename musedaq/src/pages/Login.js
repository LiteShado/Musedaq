


import SignupLogin from '../components/SignupLogin'

const Login = (props) => {
    return(
        <div>
            <div>
                <SignupLogin className="input"
                buttonText="Log In to Musedaq"
                route="/users/login"
                log="Login Successful"
                title="login"
                />
            </div>
        </div>
    )
}



export default Login
