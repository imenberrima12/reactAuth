import React, {useContext} from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common"; 
import{ Marginer } from "../marginer"; 
import { AccountContext } from "./accountContext";
import {Link} from 'react-router-dom';

export function LoginForm(props) {

    const {switchToSignup} = useContext(AccountContext);
    const {switchForgotpasssword} = useContext(AccountContext);
return <BoxContainer>
<FormContainer>
<label>E-mail Address : </label>

<Input  type="email"   placeholder="Enter your E-mail Address"/> 
<label>Password : </label>

<Input  type="password"   placeholder="Enter your password"/> 

</FormContainer>
<Marginer direction="vertical" margin={10}/>  

<MutedLink href="#" >Forgot your password ? 
<BoldLink href="#"  onClick={switchForgotpasssword} />
</MutedLink>

<Marginer direction="vertical" margin="3em"/> 

<SubmitButton type="submit">Sign In </SubmitButton>


<Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account ?  {"   "}
        <BoldLink href="#"  onClick={switchToSignup} >
           Sign Up
        </BoldLink>
        </MutedLink>
</BoxContainer>


}