

import SignupLogin from '../components/SignupLogin'

const Signup = (props) => {

    return(
        <div>
            <div className="signUpContainer">
                    <SignupLogin
                    className="input"
                    buttonText="Sign Up to Musedaq"
                    route="/users"
                    log="Sign Up Successful"
                    title="Sign Up to Musedaq"
                    />

            </div>
        </div>
    )
}



export default Signup
