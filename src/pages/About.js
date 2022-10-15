import React from 'react'
import Header from '../services/header/Header'

import * as S from '../Style/AboutStyle'
import Paint1 from '../imgAbout/Paint1.png'
import Paint2 from '../imgAbout/Paint2.png'
import Paint3 from '../imgAbout/Paint3.png'
import Paint4 from '../imgAbout/Paint4.png'
import Profile1 from '../imgAbout/Profile1.png'
import paint from '../imgAbout/paint.png'




export default function About() {
  return (
    <S.Body>
      <Header/>
      <S.Main>
        <S.Img src={Profile1} alt='profile'/>
        <S.Div>
          <S.P>Me formei em Belas Artes, pela UFRRJ, um sonho realizado. Ser artista e viver da arte em suas diversas formas, me incentivou a sempre enxergar algo a mais no mundo. Foi durante a minha formação que eu descobri o tipo de pessoa que sou, quais são os meus objetivos e propósitos. O tempo que levei em formação valeram para me transformar no ser humano que sou hoje, assim como a minha arte é resultado disso. </S.P>
          <S.P>Minha especialização é Ilustração, mas me formei com honras em História da Arte, com o tema do imaginário a visão feminina na arte.  Como o corpo feminino foi e é representando na arte até hoje. </S.P>
          <S.P>Esse fator me incentivou dentro da arte a representar o feminino, dentro do realismo em tela. </S.P>
        </S.Div>
        <S.Figure>
          <S.ImgZero src={paint} alt='element'/>
          <S.ImgOne src={Paint1} alt='paint1'/>
          <S.ImgTwo src={Paint2} alt='paint2'/>
          <S.ImgThree src={Paint3} alt='paint3'/>
          <S.ImgFour src={Paint4} alt='paint4'/>
        </S.Figure>
      </S.Main>
      <S.SectionOne>

      </S.SectionOne>
      <S.SectionTwo>
        
      </S.SectionTwo>
    </S.Body>
  )
}
