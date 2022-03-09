import React, {useContext} from 'react';
import { BoxContainer, FormContainer, Input, SubmitButton, MutedLink, BoldLink } from "./common"; 
import{ Marginer } from "../marginer"; 
import { AccountContext } from "./accountContext";


export function AdminForm(props) {
    const {switchForgotpasssword} = useContext(AccountContext);
return <BoxContainer>

<FormContainer>
<Input  type="email"   placeholder="Enter your E-mail Address"/> 
<Input  type="password"   placeholder="Enter your password"/> 
</FormContainer>

<Marginer direction="vertical" margin={10}/>  

<MutedLink href="#" >Forgot your password ? 
<BoldLink href="#"  onClick={switchForgotpasssword} />
</MutedLink>

<Marginer direction="vertical" margin="3em"/> 

<SubmitButton type="submit">Sign In </SubmitButton>

</BoxContainer>


}