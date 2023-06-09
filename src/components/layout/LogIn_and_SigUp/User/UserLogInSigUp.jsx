import React from 'react'
import './UserLogInSigUp.css';
import img_front from "./img/Image_front.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

export function UserLogInSigUp() {
  return (
    <div className='container'>
    <input type="checkbox" id="flip"/>
        <div className='cover'>
            <div className='front'>
                <img src={img_front} alt="" />
                <div className='text'>
                    <span className='text-1'>Every new friend is <br/> a new adventure</span>
                    <span className='text-2'>Let's get connected</span>
                </div>
            </div>
        </div>
        <form action="#">
            <div className='form-content'>
            <div className='login-form'>
                <div className='title'>Login</div>
                <div className='input-boxes'>
                    <div className='input-box'>
                        <i className='fas fa-envelope'> <FontAwesomeIcon icon={faEnvelope} /> </i>
                        <input type="text" placeholder='Enter your email' required/>
                    </div>
                    <div className='input-box'>
                    <i className='fas fa-lock'> <FontAwesomeIcon icon={faLock} /> </i>
                        <input type="password" placeholder='Enter your password' required/>
                    </div>
                    <div className='text'><a href=''>Forget password?</a></div>
                    <div className='button input-box'>
                        <i className='fas fa-envelope'></i>
                        <button type='submit'>Log In</button>
                    </div>
                    <div className='text login-text'>Don't have an account? <label htmlFor="flip">SigUp now</label></div>
                </div>
            </div>


            <div className='signup-form'>
                <div className='title'>SignUp</div>
                <div className='input-boxes'>
                    <div className='input-box'>
                        <i className='fas fa-user'> <FontAwesomeIcon icon={faUser} /> </i>
                        <input type="text" placeholder='Enter your name' required/>
                    </div>
                    <div className='input-box'>
                        <i className='fas fa-user'> <FontAwesomeIcon icon={faEnvelope} /> </i>
                        <input type="text" placeholder='Enter your email' required/>
                    </div>
                    <div className='input-box'>
                        <i className='fas fa-lock'> <FontAwesomeIcon icon={faLock} /> </i>
                        <input type="password" placeholder='Enter your password' required/>
                    </div>
                    <div className='button input-box'>
                        <i className='fas fa-envelope'></i>
                        <button type='submit'>Sig Up</button>
                    </div>
                    <div className='text signup-text'>Already have an account? <label htmlFor="flip">Login now</label></div>
                </div>
            </div>
            </div>
        </form>
    </div>
    )
}
