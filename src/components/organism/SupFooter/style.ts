import styled from "styled-components";

export const StyledFooterParent = styled.div`
display: flex;
position: relative;
flex-direction: column;
font-family: 'PP Neue Montreal', sans-serif;                                               
`
export const StyledUlDataFooter = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color:  #001e00;
height: 260px;
ul{
    list-style: none;
    color: white;
}
ul li{
    font-size:17px ;
    margin-bottom: 10px;
}
`
export const StyledSocialIcon=styled.div`
position: absolute;
display: flex;
align-items: center;
margin-top: 200px;
margin-left: 100px;
p{
    color: white;
    margin-left: 45px;
    margin-right: 5px;
}
img{
    width: 30px;
    height: 30px;
    margin-left: 8px;
    border: 1px solid white;
    border-radius: 50%;
}
`
export const StyledSocialIcon2=styled.div`
position: absolute;
display: flex;
align-items: center;
margin-top: 200px;
margin-left: 1200px;
p{
    color: white;
    margin-left: 45px;
    margin-right: 5px;
}
img{
    width: 28px;
    height: 28px;
    margin-left: 8px;
    border: 1px solid white;
    border-radius: 50%;
}
`
export const StyledSocialParent = styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: space-between;
`