import styled from "styled-components";

export const StyledParent3 = styled.div`
font-family: 'PP Neue Montreal', sans-serif;
margin: 20px 25px;
 border-top: 1px solid lightgray;
 /* border-bottom: 1px solid lightgray; */
.title{
    display: flex;
    align-items: center;
}
a{
   color :green;
   text-decoration: none;
   margin-top: 10px;
}
a:hover{
    text-decoration: underline;
}
`

export const StyledCenterDiv = styled.div`
display: flex;
align-items: center;
flex-direction: column;
img{
    margin-bottom: 30px;
}
`