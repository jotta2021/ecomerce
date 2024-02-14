import styled from "styled-components";

export const Header = styled.div`
background-color:#4682B4;
height:5rem;
display:flex;
align-items:center;
justify-content:center;



`

export const containerInput = styled.div`
display:flex;
position: relative;
border-color: #e6e6e6;
background-color: white;
border-radius: 0.5rem;
width: 28rem;
margin-top: 1rem;

input {
    width: 100%;
    border-radius: 0.5rem;
    border: 0;
    padding-left: 10px; /* Adicionei um padding para que o texto não fique muito próximo da borda */
    &:focus {
        border-color: #FFD700;
        border-width:1px;
        outline: none; 
    }
}


button{
background-color:#FFD700;
border-radius:0;
border-top-right-radius:0.5rem;
border-bottom-right-radius:0.5rem;
width:1rem;
}
`
export const Nav = styled.ul`
display:flex;
gap:2rem;
li{
    list-style:none;
    color:white;
    cursor:pointer;
   
}
li:hover{
    color:#FFD700;
}
`
export const Env = styled.div`
display:flex;
align-items:center;
left:2rem;
position:absolute;
   justify-content:center;
   h3{
    font-size:0.8rem;
    font-weight:400;
    color:white;
    
   }
`
export const Car = styled.div`
display:flex;
align-items:center;
position:absolute;
right:2rem;
cursor:pointer;
:hover{
    color:#FFD700;
}

h3{
    font-size:1rem;
    font-weight:400;
    color:white;
    
   }
`