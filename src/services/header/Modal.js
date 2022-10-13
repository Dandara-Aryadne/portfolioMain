import React, { useState } from "react";
import Props from "./Menu";
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Nav = styled.nav`
position:absolute;
width: 28%;
height:16vh;
top:15.5vh;
display:flex;
font-size:16px;
z-index:02;
`

const Ul = styled.ul`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:flex-start;
background-color:#F4F4F4;
border:solid 1px #F4F4F4;
font-family: 'Exo', sans-serif;
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




export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div>
        <Props modal={() => {setOpen(!open)}}/>
        {open && <Menu primeiro="HOME" segundo="ABOUT ME" terceiro="WORKS" quarto="ODS PROJECT"/>}
      </div>
    </section>
  );
}

const Menu = ({ primeiro, segundo, terceiro, quarto}) => {
  return (
    
    <Nav>
      <Ul>
        <Link to='/'>{primeiro}</Link>
        <Link to='/about'>{segundo}</Link>
        <Link to='/works'>{terceiro}</Link>
        <Link to='/ods'>{quarto}</Link>
      </Ul>
    </Nav>


  );
};
