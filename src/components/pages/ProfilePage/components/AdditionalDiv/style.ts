import styled from "styled-components";

export const StyledAdditionalDiv = styled.div`
font-family: 'PP Neue Montreal', sans-serif;
margin: 30px 150px;
border: 1px solid lightgray;
border-radius: 20px;
width: 80%;
height: 400px;
.parent{
    width: 95%;
    height: 360px;
    margin-left: 30px;
    margin-top: 20px;
}
.title{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.center{
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
      margin-bottom: 50px;
    }
    .link{
        margin-top: 20px;
        margin-left: 10px;
        a{
            text-decoration: none;
            color: green;
        }
        a:hover{
            text-decoration: underline;
        }
        .link1{
            margin-right:40px ;
        }
    }
}
 `