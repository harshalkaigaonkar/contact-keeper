import React, { useContext, useState, useEffect } from 'react'
import AlertContext from '../../Context/Alert/AlertContext';
import AuthContext from '../../Context/Auth/AuthContext';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { error, clearErrors, login, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }
        if (error === "Invalid Credentials") {
            setAlert(error, 'red');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please Enter the Credentials', 'red')
        } else {
            login({ email, password })
        }
    }

    return (
        <div>
            <main className="pa4 black-80">
                <form className="measure center pa5" onSubmit={onSubmit} >
                    <legend className="f2 fw6 ph0 mh0 tc center pa3">Account {" "}<span className='blue'>Login</span></legend>
                    <div className="ma3">
                        <label className="db fw6 lh-copy f5" htmlFor="email">Email:</label>
                        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email" value={email} onChange={onChange} />
                    </div>
                    <div className="ma3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password:</label>
                        <input class="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password" value={password} onChange={onChange} />
                    </div>
                    <div className="ma4">
                        <input className="b pa2 input-reset dim pointer f5 w-100 white bg-blue" type="submit" value="Log In" />
                    </div>
                    <div className="lh-copy ma4">
                        <a href="/register" className="f5 link dim black db tc ba pa1">Register</a>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Login;
