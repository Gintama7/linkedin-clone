import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch();

    const logintoApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                })
                );
            }).catch(error => alert(error));
    }

    const register = () => {
        if (!name) {
            return alert("Please enter your full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        );
                    });
            }).catch((error) => alert(error));
    }


    return (
        <div className="login">
            <img src="https://bbrcreative.com/wp-content/uploads/2013/10/LinkedIn-Logo-2C-900x290.png" alt="" />
            <form >
                <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name(required if registering)"
                    type="text" />
                <input
                    type="text" value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder="Profile pic Url (Optional)" />
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email" />
                <input value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Password" />

                <button type="submit" onClick={logintoApp}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>

    )
}

export default Login;