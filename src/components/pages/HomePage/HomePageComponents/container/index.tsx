/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import {
  mainContainer,
  mainContainerPadding,
  responsiveContainer,
} from './style'; 

interface ContainerProps {
  children: ReactNode;
  noSpaces?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, noSpaces }) => {
  return (
    <div
      css={[
        mainContainer,
        // noSpaces && mainContainerPadding, // Conditionally apply mainContainerPadding
        responsiveContainer,
      ]}
    >
      {children}
    </div>
  );
};

export default Container;