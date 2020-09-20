import React from 'react';
import styled from '@emotion/styled';

const Text = styled.p`
  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => `${fontSize}px` || 14};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
`;

const Label = ({ text, color, fontSize, fontWeight, customStyle }) => {
  return (
    <Text
      role="presentation"
      aria-label={text}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      style={{ ...customStyle }}
    >
      {text}
    </Text>
  );
};

export default Label;
