import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../Img/Logo.png'
import * as S from './HeaderStyle'
import styled from 'styled-components'






export default function Header(){


  return (
    <section>
      <div>
        <img src={Logo} alt='logo'/>
      </div>
      <nav>
      <ul>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT ME</Link>
        <Link to="/works">WORKS</Link>
        <Link to="/ods">ODS PROJECT</Link>
      </ul>
     </nav>
    </section>
  )
}
