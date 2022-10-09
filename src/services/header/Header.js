import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../Img/Logo.png'
import * as S from './HeaderStyle'
import styled from 'styled-components'

const StyledLink  = styled(Link)`
font-size: 28px;
color: #000000;
display: flex;
align-items: center;
width: 10vw;
&:hover {
  cursor: pointer;
  font-weight: 900;
  color: #BC8F8F;
 }
}

  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

@media only screen and (min-width: 360px) and (max-width: 800px) {
  display:flex;
  justify-content:center;
  font-size:9.5px;
  width:25%;
  &:hover {
    cursor: pointer;
    font-weight: 900;
    color: #BC8F8F;
   }
  }
  
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
}
`

export default function Header(){
  return (
    <S.Section>
      <S.Div>
        <S.Img src={Logo} alt='logo'/>
      </S.Div>
      <S.Nav>
      <S.Ul>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/about">ABOUT ME</StyledLink>
        <StyledLink to="/works">WORKS</StyledLink>
        <StyledLink to="/ods">ODS PROJECT</StyledLink>
        
      </S.Ul>
     </S.Nav>
       
    </S.Section>
  )
}
