import React from 'react';
import styled from '@emotion/styled';

const Item = styled.li`
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  color: ${({ color }) => color || 'white'};
`;

const List = ({ missionIds, customStyle, color, fontWeight }) => {
  return (
    missionIds.length > 0 && (
      <ul style={customStyle}>
        {missionIds.map((id, i) => (
          <Item key={i * Math.random()} color={color} fontWeight={fontWeight}>
            {id}
          </Item>
        ))}
      </ul>
    )
  );
};

export default List;
