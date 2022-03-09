import React, {useContext} from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common"; 
import{ Marginer } from "../marginer"; 
import { AccountContext } from "./accountContext";

export function ForgotPassword(props) {

return 
(<BoxContainer>
<FormContainer>
<label>E-mail Address : </label>

<Input  type="email"   placeholder="Enter your E-mail Address"/> 

</FormContainer>
<Marginer direction="vertical" margin={10}/>  

<SubmitButton type="submit">Submit </SubmitButton>
<label> You will receive an email within 24 hours containing a temporary password. Please change it as soon as you enter your account.</label>

</BoxContainer>
); 

}