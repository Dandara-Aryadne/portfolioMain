import styled from 'styled-components'

export const Section = styled.section`
width:100%;
height:30vh;
`
export const Div= styled.div`
display:flex;
justify-content:center;
align-items:center;
width:12%;
height:13vh;
margin-left:10%;
margin-bottom:8vh;
z-index:02;
`

export const Img = styled.img`
width:70%;
@media screen and (min-width: 360px) and (max-width:800px){
   width:60%;
}
`

export const Nav = styled.nav`
position:absolute;
width: 40%;
height:5vh;
margin-left:50%;
top:14vh;
@media screen and (min-width: 360px) and (max-width:800px){
 display:none;
}
`
export const Ul = styled.ul`
display:flex;
justify-content:space-evenly;
}
`

export const Box = styled.div`

@media screen and (min-width: 360px) and (max-width:800px){
    display:flex;
    height:25vh;
    width:32%;
    flex-direction:column;
    margin-left:7%;
    margin-top
    background-color:#F4F4F4;
    z-index:20;
    
  }

@media screen and (min-width: 1080px) and (max-width:1980px){
  display:none;
}

`