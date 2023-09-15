import { css } from '@emotion/react';

const mainContainer = css`
  width: 78%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

const mainContainerPadding = css`
  padding: 1rem 0;
`;

const responsiveContainer = css`
  @media (max-width: 575px) {
    width: 98%;
  }

  @media (min-width: 576px) {
    width: 95%;
  }

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 992px) {
    width: 85%;
  }

  @media (min-width: 1400px) {
    width: 80%;
  }
`;

export { mainContainer, mainContainerPadding, responsiveContainer };
