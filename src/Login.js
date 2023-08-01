import React from 'react'
import { auth} from './Authentication/Firebase'
import { login } from './config/userSlice'
import './Login.css'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

function Login() {
    const dispatch=useDispatch();
    const googleProvider=new GoogleAuthProvider();
    const signIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(({user})=>(
            dispatch(
                login({
                    displayName:user.displayName,
                    email:user.email,
                    photoURL:user.photoURL,
                })  
            )
        ))
    };
  return (
    <div className='login'>
        <div className='login_container'>
            <img
              src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'
              alt=''
            />
            <Button variant='contained' color='primary' onClick={signIn}> 
                Login
            </Button>
        </div>
    </div>
  )
}

export default Login