import styled from "styled-components";

export const StyledJobDiv = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 12px;
  width: 100%;
  margin-top: 10px;
  a:hover {
    text-decoration: underline;
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
  .likeandDis {
    margin-left: 660px;
    display: flex;
    align-items: center;
    .Favorite{
      margin-right: 20px;
    }
    /* justify-content: space-around; */
  }
`;
export const StyledVerifiedDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-top: 18px;
  }
`;
export const StyledRating = styled.div`
  margin: 18px 0 0 3px;
`;

export const StyledLocation = styled.div`
  color: gray;
  margin: 22px 0 0 5px;
`;

export const StyleParent1 = styled.div`
  font-family: "PP Neue Montreal", sans-serif;
  h1 {
    margin: 80px 70px -50px;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 40px;
    a {
      text-decoration: none;
      color: green;
      cursor: pointer;
    }
    a:hover {
      text-decoration: underline;
    }
    .exit {
      margin: -72px 0 30px 0;
      color: green;
    }
  }
`;

export const StyleParent2 = styled.div`
  display: flex;
  width: 88%;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin: 100px 70px;
  .firstRight {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    a {
      font-size: 16px;
      color: green;
      text-decoration: none;
      margin-bottom: 20px;
    }
    .apply {
      margin-top: 10px;
    }
    .apply,
    .save {
      margin-bottom: 20px;
    }
    .save {
      display: flex;
      align-items: center;
    }
    .link {
      margin-bottom: 15px;
    }
    .Connects {
    }
  }
  .secondRight {
    width: 92%;
    height: 100%;
    .verified {
      display: flex;
      margin-top: 20px;
    }
    .rate {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const LeftSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgray;
  .four {
    display: flex;
    align-items: center;
    font-size: 16px;
    width: 95%;
    .typeo {
      margin-left: 5px;
    }
  }
  .one {
    width: 96%;
    a {
      font-size: 16px;
      color: green;
      text-decoration: none;
    }
    .jobTitle {
      margin: 10px 0px;
    }
    .location {
      display: flex;
      align-items: center;
      .icon {
        margin-top: 20px;
        color: blue;
      }
    }
  }
  .two {
    width: 96%;
  }
  .fourLeft {
    width: 95%;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Subsection = styled.div`
  border-bottom: 1px solid lightgray;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const StyleThirdSection = styled.div`
  width: 95%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .content {
    display: flex;
    height: 130px;
    justify-content: space-around;
    .icon {
      margin-right: 1px;
      margin-top: 5px;
    }
  }
`;
export const StyleSixSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 95%;
  .sixSection {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;
