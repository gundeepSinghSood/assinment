import React from 'react';
import styled from '@emotion/styled';

// atoms
import Label from '../../atoms/Label';

// component
import FilterItem from './component/FilterItem';

const Wrapped = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
`;

const createDateRange = (startFrom, noOfYears) =>
  Array.from({ length: noOfYears }, (_, i) => i + startFrom);

const filterDate = [...createDateRange(2006, 15)];

const FilterPanel = ({ activeDate, isLaunch, isLanding, handleOnClick }) => {
  return (
    <Wrapped>
      <Label text="Filters" color="black" fontWeight={600} fontSize={20} />
      <FilterItem
        title="Launch Year"
        data={filterDate}
        onClick={v => handleOnClick(v, 'years')}
        activeItem={activeDate}
      />
      <FilterItem
        title="Succeesful Launch"
        data={['True', 'False']}
        onClick={v => handleOnClick(v, 'launch')}
        activeItem={isLaunch}
      />
      <FilterItem
        title="Succeesful Landing"
        data={['True', 'False']}
        onClick={v => handleOnClick(v, 'landing')}
        activeItem={isLanding}
      />
    </Wrapped>
  );
};

export default FilterPanel;
