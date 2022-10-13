import React from 'react'
import {Link} from 'react-router-dom'
import Modal from './Modal'
import Logo from '../../Img/Logo.png'
import styled from 'styled-components'
import * as S from './HeaderStyle'

const StyledLink = styled(Link)`
font-family: 'Exo', sans-serif;
font-size:23px;
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
`




export default function Header(){


  return (
    <S.Section>
      <S.Box>
      <Modal/>
      </S.Box>
      <S.Div>
        <S.Img src={Logo} alt='logo'/>
      </S.Div>
      <S.DivTitle>
        <S.P>Portfólio Page</S.P>
        <S.H1>Dandara Aryadne</S.H1>
      </S.DivTitle>
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
