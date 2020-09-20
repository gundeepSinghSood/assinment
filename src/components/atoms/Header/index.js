import React from 'react';
import styled from '@emotion/styled';

const HeaderWrap = styled.div`
  padding: 5px 20px;
`;

const Title = styled.h3`
  color: black;
  font-size: 36px;
`;

const Header = () => {
  return (
    <HeaderWrap role="heading" aria-level="1">
      <Title aria-label="heading">SpaceX Launch Program</Title>
    </HeaderWrap>
  );
};

export default Header;
