
import React from "react";

import './sign-up.css';

function signup() {

    return (

        <div className="container">

            <div className="signup-form">

                <h1 className="text-place">Sign Up</h1>

                <form action="" className="enter-notes">

                    <div className="user-block">
                        <label htmlFor="" className="enter-username">Username</label>
                        <input type="text" className="username-note" placeholder="Enter your username..."/>
                    </div>

                    <div className="email-block">
                        <label htmlFor="" className="enter-username">E-mail</label>
                        <input type="email" className="username-note" placeholder="Enter your e-mail..."/>
                    </div>

                    <div className="pass-block">
                        <label htmlFor="" className="enter-username">Password</label>
                        <input type="password" className="username-note" placeholder="Enter your password..."/>
                    </div>

                    <div className="conf-pass-block">
                        <label htmlFor="" className="enter-username">Confirm-password</label>
                        <input type="password" className="username-note" placeholder="Enter your password..."/>
                    </div>

                    <button className="send-up">Send Notes</button>

                </form>

                <div className="links">
                    <p className="go-sign-in">Go to: </p>
                    <a href="#" className="to-sign-in">Sign In</a>
                    <p className="conts">page.</p>
                </div>

            </div>

        </div>

    )

}

export default signup;