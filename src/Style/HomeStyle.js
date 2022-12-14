import styled from 'styled-components'


export const Main=styled.main`
position:relative;
width:100%;
height:100vh;
display:flex;

// @media screen and (min-width:360px) and (max-width:800px){
//     width:100%;
//     height:100vh;

//     border:solid;
    
// }
`


export const DivTitle=styled.div`
position:absolute;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:28%;
height:10%;
z-index:2;
top:56%;
left:2%;

@media screen and (min-width:360px) and (max-width:800px){
   width:70%;
   height:12%;
   top:30vh;
   left:16%;
  
}
`

export const H1=styled.h1`
top:30%;
position:absolute;
left:9.5%;
font-size:43px;
font-family: 'Comfortaa', cursive;

@media screen and (min-width:360px) and (max-width:800px){
    font-size:22px;
    left:7%;
    top:18%;
 
 }
`

export const P=styled.p`
margin-bottom:60%;
font-family: 'Exo', sans-serif;
font-size:20px;

@media screen and (min-width:360px) and (max-width:800px){
    position: absolute;
    top:65%;
 }
`


export const Section= styled.div`
position:absolute;
top:30%;
display: flex;
width:100%;
height:60vh;
background-color: #F5F5F5;
border:solid 1px #F5F5F5 ;

@media screen and (min-width:360px) and (max-width:800px){
  width:100%;
    display:flex;
  height: 50vh;
 
}
`
export const ImgOne = styled.img`
display:flex;
position:absolute;
right:73%;
bottom:33%;
width:24%;
height:30%;

@media screen and (min-width:360px) and (max-width: 800px){
 display:none;
}
`

export const Div=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-left:20%;
width:50%;

`

export const ImgTwo=styled.img`
margin-left:28%;
height:125%;

@media screen and (min-width:360px) and (max-width: 800px){
    display:none;
   }
`

export const ImgThree=styled.img`
margin-left:16.3%;
margin-top:26%;
width:80%;
height:35vh;




@media screen and (min-width: 1080px) and (max-width:1980px){
    display:none;
}
`

export const Figure =styled.figure`
position:absolute;
display:flex;
justify-content:space-evenly;
align-items:center;
right:10%;
top:35%;
flex-direction: column;
width:10%;
height:50%;

@media screen and (min-width:360px) and (max-width:800px){
    position: absolut;
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 8vh;
    top:84%;
    left:20%;
    
}
`

export const ImgFour=styled.img`
width:40%;

@media screen and (min-width:360px) and (max-width:800px){
width:60%;
}
`

export const ImgFive=styled.img`
width:40%;
@media screen and (min-width:360px) and (max-width:800px){
    width:60%;
    }
`

export const ImgSix=styled.img`
width:40%;
@media screen and (min-width:360px) and (max-width:800px){
    width:65%;
    }
`