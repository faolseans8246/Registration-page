
import React from "react";
import './sign-in.css'

function signin(){

    return (

        <div className="container">

            <div className="sign-form">

                <h1>Sign In</h1>

                <div className="enter-note">

                    <form action="" className="form-class">

                        <label htmlFor="" className="login-text">Login</label>
                        <input type="text" className="login-note" placeholder="Enter your login..."/>

                        <label htmlFor="" className="parol-text">Parol</label>
                        <input type="password" className="parol-note" placeholder="Enter your parol..."/>

                        <button className="sent-notes">Enter</button>

                    </form>

                    <div className="link-part">
                        <a href="#" className="signin-other">sign in by browser</a>
                        <a href="#" className="sign-up">Sign Up</a>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default signin;