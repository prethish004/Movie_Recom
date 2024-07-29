import React, { useState } from 'react'
import classes from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../firebase';
import {signUpProvider} from '../../firebase';
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [error,setError]=useState(null);

  const submitHandler=async()=>{
    if(!name||!email||!password){
      setError('Invalid Entry')
      return;
    }
    const message= await registerUser(email,password,name);
    if(message){
      setError(message);
      navigate('/register')
      return;
    }
    setError(null);
    navigate('/login');
  }
  const providerHandler=()=>{
    signUpProvider();
    navigate('/')
  }
  return (
    <div className={`${classes.Register} page`}>
      <div className={classes.RegisterForm}>
        <h1>Register</h1>
        {error && <p className='text-danger text-center m-3'>{error}</p>}
        <form>
          <div className='mb-3'>
            <label htmlFor='name' className='form-lable text-light'>Name</label>
            <input type='text' className='form-control' id='name' autoComplete='off' placeholder='enter the Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-lable text-light'>Email</label>
            <input type='email' className='form-control' id='email' autoComplete='off' placeholder='enter the email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-lable text-light'>Password</label>
            <input type='password' className='form-control' id='password' placeholder='enter the Password' onChange={(e) => setPassword(e.target.value)} />
            {/* <div className='text-center text-warning mt-3' style={{ cursor: 'pointer' }}>Forget Password</div> */}
          </div>
          <div className='d-grid'>
            <button type='button' className='btn btn-primary form-control mt-3' onClick={submitHandler}>Sign up</button>
          </div>
        </form>
        <button type='button' className='btn btn-primary form-control mt-3' onClick={providerHandler}>Continue with Google</button>
        <p className='text-center text-light mt-3'>Have an account<span className='text-warning' style={{cursor: 'pointer' }} onClick={() => navigate('/login')}> Login</span></p>
      </div>
    </div>
  )
}
export default Register;