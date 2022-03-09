import React, {useContext} from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common"; 
import{ Marginer } from "../marginer"; 
import { AccountContext } from "./accountContext";


export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
return (
  
<BoxContainer>
<FormContainer>
<label>E-mail Address : </label>
<Input  type="email"   placeholder="Enter your E-mail Address"/>  
<label>Password : </label>
<Input  type="password"   placeholder="Enter your password"/> 
<label>Confirm your password: </label>
<Input  type="password"   placeholder="Confirm your password"/> 
<Marginer direction="vertical" margin="3em" />
</FormContainer>




<SubmitButton type="submit">Sign Up </SubmitButton>


<Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account ?  {"   "}
        <BoldLink href="#" onClick={switchToSignin} >
           Sign In
        </BoldLink>
        </MutedLink>
</BoxContainer>
); 
}