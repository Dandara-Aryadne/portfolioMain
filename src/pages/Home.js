import React from 'react'
import Header from '../services/header/Header'
import * as S from '../Style/HomeStyle'
import Bend from '../Img/Bend.png'
import First from '../Img/Main.png'
import Mobile from '../Img/Mobile.png'
import Git from '../Img/Git.png'
import Insta from '../Img/Insta.png'
import Medium from '../Img/Medium.png'


export default function Home(){
  return (
    <S.Main>
      <Header/>
      <S.DivTitle>
        <S.P>Portfólio Page</S.P>
        <S.H1>Dandara Aryadne</S.H1>
      </S.DivTitle>
      <S.Section>
          <S.ImgOne src={Bend} alt='bend'/>
          <S.ImgThree src={Mobile} alt='main im responsive'/>
          <S.Div>
          <S.ImgTwo src={First} alt='main img'/>
          </S.Div>
      </S.Section>

          <S.Figure>
          <a href="https://www.instagram.com/cinemaatm/">
            <S.ImgFour src={Insta} alt='Instagram' />
          </a>
          <a href="https://medium.com/@dandaraaryadne">
            <S.ImgFive src={Medium} alt='Medium'/>
          </a>
          <a href="https://github.com/Dandara-Aryadne">
            <S.ImgSix src={Git} alt='Github'/>
          </a>
          </S.Figure>
   
    </S.Main>
  )
}
