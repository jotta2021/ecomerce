import styled from "styled-components";

export const Container = styled.div`

display:flex;
flex-direction:column;

img{
width:100vw;
height:20rem;
object-fit:cover;
z-index:-1;
position:absolute;
filter: blur(1px);
top:3rem;



}
h1{
    color:white;
font-size:3rem;
margin-top:10rem;
text-align:left;
margin-left:2rem;

}
p{
    font-size:1.5rem;
    margin-top:-2.5rem;
    text-align:left;
margin-left:2rem;
font-weight:700;

    
}
`