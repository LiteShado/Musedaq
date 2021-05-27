

import Login from '../components/Login'

const LoginPage = (props) => {
    return(
        <div>
            <div>
                <Login className="input"
                buttonText="Log In to Musedaq"
                route="/users/login"
                log="Login Successful"
                title="login"
                />
            </div>
        </div>
    )
}



export default LoginPage
