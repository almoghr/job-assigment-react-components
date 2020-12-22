import React from 'react'
import './RegistrationForm.scss'

const RegistrationForm = () => {
    return (
        <div className="formContainer">
            <label className="fullNameLabel" htmlFor="fullName">Your Full Name</label>
            <input id="fullName" className="form-Input" type="text" placeholder="Name" autoComplete="off"/>
        </div>  
    )
}

export default RegistrationForm
