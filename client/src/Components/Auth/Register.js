import React, { useContext, useState, useEffect } from 'react'
import AlertContext from '../../Context/Alert/AlertContext';
import AuthContext from '../../Context/Auth/AuthContext';


const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }
        if (error === 'User Already exists') {
            setAlert(error, 'red');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setAlert("Please Enter All The Fields", "red")
        } else if (password !== password2) {
            setAlert("Password Does Not Match", "red")
        } else {
            register({ name, email, password })
        }
    }

    return (
        <div>
            <main className="pa4 black-80">
                <form className="measure center pa3" onSubmit={onSubmit} >
                    <legend className="f2 fw6 ph0 mh0 tc center pa3">Account {" "}<span className='blue'>Register</span></legend>
                    <div className="ma3">
                        <label className="db fw6 lh-copy f5" htmlFor="name">Name*:</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="name" name="name" value={name} onChange={onChange} />
                    </div>
                    <div className="ma3">
                        <label className="db fw6 lh-copy f5" htmlFor="email">Email*:</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email" value={email} onChange={onChange} />
                    </div>
                    <div className="ma3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password*:</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password" value={password} onChange={onChange} minLength="6" />
                    </div>
                    <div className="ma3">
                        <label className="db fw6 lh-copy f5" htmlFor="password2">Confirm Password*:</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password2" value={password2} onChange={onChange} />
                    </div>
                    <div className="ma4">
                        <input className=" pa2 input-reset dim pointer f5 w-100 white bg-blue" type="submit" value="Register" />
                    </div>
                    <div className="lh-copy ma4">
                        <a href="/login" className="f5 link dim black db tc ba pa1">Login</a>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Register;
