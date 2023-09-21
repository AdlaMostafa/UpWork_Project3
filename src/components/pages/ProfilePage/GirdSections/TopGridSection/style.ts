import styled from "styled-components"

export const StyleTopSection = styled.div`
font-family: 'PP Neue Montreal', sans-serif; 
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
height: 200px;
border-radius: 15px;
.availableDiv{
    display: flex;
    align-items: center;
     margin-bottom: 40px;
     gap: 20px;
     margin-top:20px;
    
}
`
export const StyleLeftSection = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 550px;
height:100%;
.avatar{
    margin-left: 40px;
    margin-right: 40px;
}
`
export const StyledRightDiv=styled.div`
display: flex;
align-items: center;
margin-bottom: 40px;
margin-right: 20px;
`