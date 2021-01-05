import React from 'react';
import './sign-up-and-sign-in.style.scss';

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignUpAndSignIn = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignUpAndSignIn;