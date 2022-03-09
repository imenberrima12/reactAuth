
import React from "react"; 
import styled from "styled-components"; 


export const BoxContainer = styled.div`
width: 100%; 
display: flex; 
flex-direction: column; 
align-items: center; 
margin-top: 10px; 
margin-bottom: 80px; 


`; 

export const FormContainer=styled.form`
width: 100%; 
display: flex; 
flex-direction column; 
box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
margin-bottom: 30px; 
margin-right: 20px; 

`; 

export const MutedLink= styled.a`
font-size: 15px; 
color: rgb(102, 102, 102); 
font-weight: 500; 
text-decoration: underline; 
display: flex; 

`; 


export const BoldLink = styled.a`
font-size: 15px; 
color: rgb(50,117,196); 
font-weight: 500; 
text-decoration: none;

`;



export const Input= styled.input `
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 1);
  padding: 0px 10px;
  border-bottom: 1.5px solid rgb(102, 102, 102);
  transition: all 200ms ease-in-out;
  font-size: 15px;
  &::placeholder {
    color: rgb(102, 102, 102);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgb(102, 102, 102);
  }
  &:focus {
    outline: none;
    border-bottom: 1.5px solid rgb(102, 102, 102);
  }
`; 

export const SubmitButton = styled.button`
width: 100% ; 
padding: 11px 40%; 
color : #fff; 
font-size: 15px; 
font-weight: 600; 
border: none; 
border-radius: 100px 100px 100px 100px; 
cursor: pointer; 
transition : all, 240ms ease-in-out; 
background: rgb(50,117,196);
background: radial-gradient(50deg, rgba(50,117,196,0.7147233893557423) 0%, rgba(50,117,196,0.7147233893557423) 51%, rgba(50,117,196,0.7035189075630253) 100%);
&:hover {
    filter: brightness(1.3);
  }

`;