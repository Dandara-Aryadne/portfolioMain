import styled from 'styled-components'

export const Body=styled.body`
width:100%;
height:100vh;

@media screen and (min-width:360px) and (max-width:800px){
width:100%;
height:100vh;

}
`

export const Main=styled.main`
display:flex;
width:100%;
height:60vh;
margin-right:18%;
background-color: #F5F5F5;
border:solid 1px  #F5F5F5;
@media screen and (min-width:360px) and (max-width:800px){
display:flex;
width:100%;
height:60vh;
margin-right:18%;
background-color: #F5F5F5;
border:solid 1px  #F5F5F5;

}
`
export const Img=styled.img`
position:absolute;
display:flex;
width:25%;
height:50vh;
bottom:20%;
right:73%;


@media screen and (min-width:360px) and (max-width:800px){
position:absolute;
display:flex;
width:24%;
height:18vh;
bottom:52%;
right:73%;

}

`
export const Div=styled.div`
display:flex;
justify-content:space-evenly;
flex-direction:column;
width: 28%;
height:50%;
margin-left:30%;
margin-top:6%;
text-align: justify;
text-justify: inter-word;

@media screen and (min-width:360px) and (max-width:800px){
position:absolute;
display:flex;
justify-content:space-evenly;
flex-direction:column;
width: 64%;
height:25%;
margin-left:30%;
margin-top:6%;
text-align: justify;


}
`

export const P=styled.p`
font-family: 'Exo', sans-serif;

@media screen and (min-width:360px) and (max-width:800px){
    font-size:8px;
   
}
`

export const Figure=styled.figure`
position:absolute;

left: 58%;
bottom:16%;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
width:40%;
height:56vh;
@media screen and (min-width:360px) and (max-width:800px){
    position:absolute;
    left:17%;
    bottom:16%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    width:65%;
    height:30vh;

}

`
export const ImgZero=styled.img`
width:10%;
display:flex;
position:absolute;
bottom:90%;
right:80%;



`
export const ImgOne =styled.img`
width:35%;
height:48%;
`
export const ImgTwo =styled.img`
width:35%;
height:48%;
`
export const ImgThree =styled.img`
width:35%;
height:48%;
`
export const ImgFour =styled.img`
width:35%;
height:48%;
`
