import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Helmet } from "react-helmet-async";
import { UserAuthContext } from "../../context/UserAuthContext";



const Login = () => {
    // get value from context 
    const { value,setValue } = useContext(UserAuthContext);
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    function UsernameChange(event) {
        setUsername(event.target.value)
    }
    const [password, setPassword] = useState("")
    function PasswordChange(event) {
        setPassword(event.target.value)
    }
    const [errors, setError] = useState("")
     function onSubmitHandler(event) {
        event.preventDefault();
        
        // get user that matches the user input
        const getValueElement = value.find((val) => val.user.username == username && val.user.password == password)
    //    get index of the user
        const checkValueExists =  value.some((val) => val.user.username == username && val.user.password == password)
        console.log(username, password)
        if (checkValueExists) {
            // set Authenticated to true
            getValueElement.isAuthenticated = true
            // save current user in value
            setValue(getValueElement)
            navigate('/dashboard');
            console.log('Signed in successfully')
        }
        else {
            setError("username or password doesn't match the user specified in the code. You can log in with either username:Shay and password:12345 or username;Ifeoluwa and password:2468")
            console.log('username or password doesnt match')
        }
    }
    

    console.log(value)
    return (<>
        <Helmet>
            <title>Login</title>
            <meta name="description" content="Login into to Delish Models" />
            <link rel="canonical" href="/login" />
        </Helmet>

        <div className="registeration-div">
            <div className='logo'>
                <h1>Delish Models</h1></div>
            <form onSubmit={onSubmitHandler} >
                <label>Username:</label>
                <input
                    type="text"
                    onChange={UsernameChange}
                />
            
                <label>Password:</label>
                <input
                    type="password"
                    onChange={PasswordChange}
                />
                  {errors && <p style={{ color: 'red' }}>{errors}</p>}
                <button className="blue-button">Login</button>
                {/* <p>Don't have an account?
                    <Link to="/registeration">
                        Click here to Register
                    </Link>
                </p> */}

            </form>
        </div>
    </>

    );
}

export default Login;