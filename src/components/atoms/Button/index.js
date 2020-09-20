import React from 'react';
import styled from '@emotion/styled';

const ButtonWrap = styled.button`
  padding: 5px;
  background-color: ${({ isActive }) => (isActive ? '#88b838' : '#c9dfa2')};
  border: 0px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  margin-top: 10px;
  width: 45%;
  cursor: pointer;
  &:hover {
    background-color: #88b838;
  }
  &:focus {
    background-color: #88b838;
    outline: none;
    outline-offset: none;
  }
`;

const Btn = ({ label, width, isActive = false, onClick }) => {
  return (
    <ButtonWrap
      aria-label={label}
      isActive={isActive}
      width={width}
      onClick={onClick}
    >
      {label}
    </ButtonWrap>
  );
};
export default Btn;
