import styled from "styled-components";

export const StyledParent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const StyledCard = styled.div`
background-color: #e3f9ec;
border-radius: 15px;
width: 260px;
height: 130px;
display: flex;
align-items: center;
margin-right: 9px;
.content{
    margin:10px;
}
.rightContent{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;
    margin-top: 11px;
    .icon{
        margin-bottom: -1px;
    }
}
`