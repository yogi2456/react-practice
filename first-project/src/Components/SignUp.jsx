import React, { useState } from 'react'

const SignUp = () => {

    const [userData, setUserData] = useState({
        name: "", email: "", password: "", confirmpassword: ""
    })

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmpassword) {
            if(userData.password === userData.confirmpassword) {
                try {
                    const response = {data: {success: true}}
                    if(response.data.success) {
                        alert("registration successfull")
                        setUserData({
                            name: "", email: "", password: "", confirmpassword: ""
                        })
                    }
                } catch (error) {
                    
                }
            } else {
                alert("password not matched")
            }
        } else {
            alert("All fields are mandatory")
        }
    }
  return (
    <div>
      <h1>Register Form</h1>
     <form onSubmit={handleSubmit}>
     <label>Name</label> <br/>
      <input type='text' name='name' onChange={handleChange} value={userData.name}/> <br/>
      <label>Email</label> <br/>
      <input type='email' name='email' onChange={handleChange} value={userData.email}/> <br/>
      <label>Password</label> <br/>
      <input type='password' name='password' onChange={handleChange} value={userData.password}/> <br/>
      <label>ConfirmPassword</label> <br/>
      <input type='password' name='confirmpassword' onChange={handleChange} value={userData.confirmpassword}/> <br/>
      <input type='submit' value="Register"/>
     </form>
    </div>
  )
}

export default SignUp
