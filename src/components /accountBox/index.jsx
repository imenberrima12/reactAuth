import React, { useState } from "react"; 
import styled from "styled-components"; 
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";
import { motion } from "framer-motion"; 
import { AccountContext } from "./accountContext";
import{ Marginer } from "../marginer"; 
import { ForgotPassword } from "./forgotPassword";


const BoxContainer= styled.div`
width : 380px; 
min-height : 500px; 
display: flex;
flex-direction : column ; 
border-radius: 20px; 
background-color: #fff; 
box-shadow : 0 0 3.5px rgba( 15, 15, 1) ; 
position : relative; 
overflow: hidden; 
`; 


const TopContainer = styled.div`
width : 100%; 
height : 225px;
display: flex;
flex-direction : column ; 
justify-content: flex-end; 
padding: 0 1.8em; 
padding-bottom : 5em ; 


`; 


const BackDrop = styled(motion.div)`
width: 160% ; 
height: 550px; 
position : absolute; 
display: flex; 
flex-direction: column; 
border-radius: 40%; 
transform: rotate(60deg);
top: -330px; 
left: -110px; 
right: 50px; 

background: rgb(50,117,196);
background: radial-gradient(50deg, rgba(50,117,196,0.7147233893557423) 0%, rgba(50,117,196,0.7147233893557423) 51%, rgba(50,117,196,0.7035189075630253) 100%);
`; 


const HeaderContainer = styled.div`
width: 100%; 
display: flex; 
flex-direction: column; 
`; 

const HeaderText = styled.h3`
font-size: 30px; 
line-weight: 600; 
line-height: 0; 
color: #fff; 
z-index: 15;
margin: 0; 
margin-top: 40px; 


`; 
const SmallText=styled.h5`
color:#fff; 
font-weight: 500; 
font-size: 15px; 
z-index: 10; 
margin: 0; 
margin-top: 8px; 
margin-bottom: 80px; 
line-height: -1.24; 


`;

const InnerContainer= styled.div`
width: 82%; 
display: flex;  
flex-direction: column; 
padding-right: 2em; 
padding-left: 2em;
 
`;

const backdropVariants = {
    expanded: {
      width: "280%",
      height: "1200px",
      borderRadius: "20%",
      transform: "rotate(60deg)",
    },
    collapsed: {
      width: "160%",
      height: "550px",
      borderRadius: "50%",
      transform: "rotate(60deg)",
    },
  };


  const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
  };



  
export function AccountBox(props) { 

    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin", "Forgotpassword");


    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
          setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
      };


      const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
          setActive("signup");
        }, 400);
      };

      const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
          setActive("signin");
        }, 400);
      };

      const switchForgotpassword = () => {
        playExpandingAnimation();
        setTimeout(() => {
          setActive("Forgotpassword");
        }, 400);
      };


      const contextValue = { switchToSignup, switchToSignin, switchForgotpassword };

     

return (
<AccountContext.Provider value={contextValue}>
<BoxContainer> 
 <TopContainer> 
     <BackDrop  initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}/> 
      {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <Marginer direction="vertical" margin="0.8em"/> 
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}

      {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>An Account</HeaderText>
              <Marginer direction="vertical" margin="0.8em"/>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}


{active === "Forgotpassword" && (
            <HeaderContainer>
              <HeaderText>Reset</HeaderText>
              <HeaderText>Your password...</HeaderText>
              <Marginer direction="vertical" margin="0.8em"/>
            </HeaderContainer>
          )}

 </TopContainer>


<InnerContainer>
        {active === "signin" && <LoginForm />}
        {active === "signup" && <SignupForm />}
        {active === "Forgotpassword" && <ForgotPassword />}
</InnerContainer>

</BoxContainer> 
</AccountContext.Provider>
); 
}