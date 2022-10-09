import styled from 'styled-components'

export const Section = styled.section`
display:flex;
align-items:center;
width:100%;
height:25vh;
@media screen and (min-width:300px) and (max-width:800px){
    display:flex;
    justify-content: space-evenly;
    width:100%;
    height:25vh;
    
}
`
export const Div = styled.div`

justify-content:center;
align-items:center;
display:flex;
width:10%;
height:30%;
margin-left:10%;
@media screen and (min-width:300px) and (max-width:800px){

    width:25%;
    margin-right:34%;
}
`

export const Img = styled.img`
width:70%;
@media screen and (min-width:300px) and (max-width:800px){
    position:absolute;
    left:5%;
    width:16%;
    
}
`

export const Nav = styled.nav`
display:flex;
align-items:center;
justify-content:center;
width:40%;
height:35%;
margin-left:30%;
margin-top:1.5%;
font-family: 'Exo', sans-serif;
font-weigth:400;
@media only screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;

    height:8%;
    width: 76%;
    align-items: center;
    justify-content:space-evenly;
    margin-left: 19.5vw;
    position: absolute;
  }
`
export const Ul = styled.ul`

display: flex;
justify-content:center;
align-items: center;
height: 8vh;
width: 100%;


@media only screen and (min-width: 360px) and (max-width: 800px) {
  margin-top:1.8%;
    display: flex;
    width: 100%;
  }
`



