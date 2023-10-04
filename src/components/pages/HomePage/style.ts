import styled from "styled-components";

interface StyledHomePageProps {}
const StyledHomePage = styled.div<StyledHomePageProps>`
  display: flex;
  justify-content: space-between;
`;
export const StyledFooter = styled.div`
  margin-top: 20px;
`;

export default StyledHomePage;
