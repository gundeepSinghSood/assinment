import React from 'react';
import styled from '@emotion/styled';

// atoms
import Label from '../../../atoms/Label';
import Button from '../../../atoms/Button';

const FilterButtonWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
`;
const FilterItem = ({ title, data, onClick, activeItem }) => {
  return (
    <>
      <Label
        text={title}
        color="black"
        fontWeight={300}
        fontSize={16}
        customStyle={{
          width: 150,
          marginTop: 20,
          alignSelf: 'center',
          paddingBottom: 10,
          borderBottom: '1px solid black',
          textAlign: 'center'
        }}
      />
      <FilterButtonWrapper>
        {data.map((label, i) => {
          const isString =
            typeof label === 'string' ? label.toLowerCase() : label;
          return (
            <Button
              label={label}
              key={i}
              onClick={() => onClick(isString)}
              isActive={activeItem === isString}
            />
          );
        })}
      </FilterButtonWrapper>
    </>
  );
};

export default FilterItem;
