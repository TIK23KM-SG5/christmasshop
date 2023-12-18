// Register.js
 
import React, { useState } from 'react';
 
const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    username: '',
    pw: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
 
      if (response.ok) {
        // Registration successful, you can redirect or show a success message
        console.log('Registration successful');
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
 
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="pw" value={formData.pw} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
 
export default Register;
 