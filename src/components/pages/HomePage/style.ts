import styled from "styled-components";

interface StyledHomePageProps {
}

const StyledHomePage = styled.div<StyledHomePageProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 40px; */
`;
export const StyledFooter = styled.div`
margin-top: 20px;
`

export default StyledHomePage;
