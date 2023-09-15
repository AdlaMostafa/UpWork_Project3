import styled from "styled-components";

export const StyledAboutSecrion = styled.div`
/* background-color: yellow; */
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
border-radius: 30px;
height: 230px;
border: 1px solid lightgray;
font-family: 'PP Neue Montreal', sans-serif;   
.about_info{
    display: flex;
    align-items: center;
    flex-direction: column;
    a{
        color: black;
        font-size: 18px;
        margin-bottom: 5px;
        text-decoration-color: black;
    }
    a:hover{
        color: #108a00;
        text-decoration-color:#108a00;
    }
}
.sliderParent{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
    .sliderInfo{
        display:flex;
        align-items: center;
    }
    a{
        text-decoration: none;
        font-size: 15px;
        text-align: end;
        margin-right: 110px;
        color: #108a00;
    }
    a:hover{
        text-decoration: underline;
    }
}
.slider{
    width: 220px;
    margin-right: 5px;
    height: 5px;
    border-radius: 3px;
    border:1px solid gray;
    background: linear-gradient(to right, #108a00 70%, white 30%);
}
`