import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from '@emotion/styled';
import LinearProgress from '@material-ui/core/LinearProgress';

// atoms
import NoRecords from '../../atoms/NoRecords';

// components
import Tile from '../../molecuels/Tile';
import FilterPanel from '../../molecuels/FilterPanel';

// services
import { api } from '../../../api';

// utils
import { getParameterByName, isBrowser, history } from '../../../utils';

const Wrapped = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

const DetailCard = props => {
  const {
     searchURL
  } = props;
  const [activeDate, setActiveDate] = useState(
    Number(getParameterByName('launch_year', searchURL))
  );

  const [isLaunch, setIsLaunch] = useState(
    getParameterByName('launch_success', searchURL)
  );
  const [isLanding, setIsLanding] = useState(
    getParameterByName('land_success', searchURL)
  );
  const [spaceXRecords, setSpaceXRecords] = useState([]);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    records: { onLoad, getSpaceXRecords }
  } = api;

  useEffect(() => {
    setIsLoading(true);
    const shouldNotCallApi =
      Number(getParameterByName('launch_year', searchURL)) !== 0 &&
      getParameterByName('launch_success', searchURL) !== null &&
      getParameterByName('land_success', searchURL) !== null;
    if (!shouldNotCallApi) {
      handleSetRecords(onLoad());
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    handleSetRecords(getSpaceXRecords(activeDate, isLaunch, isLanding, setUrl));
  }, [activeDate, isLaunch, isLanding]);

  const handleSetRecords = async toAPICall => {
    try {
      const data = await toAPICall;
      if (data) {
        setIsLoading(false);
        setSpaceXRecords(data);
      } else {
        setIsLoading(false);
      }
    } catch (err) {
      if (err) return setIsLoading(false);
    }
  };

  const handleOnClick = (value, type) => {
    switch (type) {
      case 'years':
        return setActiveDate(value);
      case 'launch':
        return setIsLaunch(value);
      case 'landing':
        return setIsLanding(value);
      default:
        return setActiveDate(2006);
    }
  };

  url !== '' &&
    isBrowser() &&
    history().window.history.pushState('1', 'Title', url);

  return (
    <Wrapped>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={2}>
          <FilterPanel
            activeDate={activeDate}
            isLaunch={isLaunch}
            isLanding={isLanding}
            handleOnClick={handleOnClick}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          {isLoading ? (
            <>
              <LinearProgress color="secondary" />
            </>
          ) : (
            <Grid container spacing={5}>
              {spaceXRecords.length > 0 ? (
                spaceXRecords.map(item => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={item.launch_date_unix}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Tile records={item} />
                  </Grid>
                ))
              ) : (
                <NoRecords message="Sorry, no records found..." />
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Wrapped>
  );
};

export default DetailCard;
