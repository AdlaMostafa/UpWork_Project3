import styled from "styled-components";

export const StyledJobDiv=styled.div`
    border-bottom: 1px solid #ccc;
    padding: 12px;
    width: 100%;
     margin-top:10px ;
    /* margin-bottom: 20px; */
    a:hover{
    text-decoration:underline ;
}
    .skills {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;

  }
  .skills .MuiChip-root {
    margin-right: 5px;
  }
.likeandDis{
  margin-left: 620px;
}
`
export const StyledVerifiedDiv = styled.div`  
display: flex;
align-items: center;
img{
  margin-top: 18px;
}
`
export const StyledRating = styled.div` 
margin-top: 18px;
margin-left: 5px;
`

export const StyledLocation = styled.div` 
color:gray;
margin-top:22px;
margin-left: 5px;
`