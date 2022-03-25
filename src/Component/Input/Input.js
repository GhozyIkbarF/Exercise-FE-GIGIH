import React from 'react'
import {useState} from 'react';
import './Input.css';

//regex to match numbers between 1 and 10 digits long


const Input = () => {
    const validPhoneNumber = /^\d{1,10}$/;
  const [phone, setPhone] = useState('');
  
  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
      setPhone(newPhone);
    }
    // just ignore the event, when new value is invalid
   };

  return (
    <div className="form">
        <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/giphy.gif" alt="" />
        <form>
            <label htmlFor='phone-input'>Phone: </label>
            <input value={phone} onChange={handleChange} id='phone-input' />
            <button className='btn-submit' type='submit'>search</button>
        </form> 
    </div>
  )
}

export default Input;