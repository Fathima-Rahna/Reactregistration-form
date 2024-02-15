

import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [formFilled, setFormFilled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
    
      setSuccessMessage('Registration successful!');
      setFormFilled(true);
     
      setFirstName('');
      setEmail('');
      setPassword('');
    } else {
      setErrors(errors);
      setFormFilled(false);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is not valid';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center w-100 bg-dark '>
      <div style={{ width: '600px' }} className='bg-white p-5 rounded shadow'>
        <h1 className='align-center text-warning'>Registration Form</h1>

        <form className='mt-5' onSubmit={handleSubmit}>
          <div className='field mb-3'>
            <label className='fs-4 text-info'>First Name</label>
            <input
              className='w-100 p-3'
              type='text'
              name='firstName'
              placeholder='Enter Your First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div className='field mb-3'>
            <label className='fs-4 text-info'>Email</label>
            <input
              className='w-100 p-3'
              type='text'
              name='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className='field mb-3'>
            <label className='fs-4 text-info'>Password</label>
            <input
              className='w-100 p-3'
              type='password'
              name='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button style={{ width: '50%', height: '70px', color: 'white', background: 'blue' }} className='fluid ui button blue me-4' type="submit">Submit</button>
        </form>

        {formFilled && <p>Registration complete</p>}
        {!formFilled && Object.keys(errors).length === 0 && <p>Fill the form</p>}
      </div>
    </div>
  )
}

export default App;
