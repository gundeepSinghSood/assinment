export const spaceXApi = http => {
  return {
    onLoad: () => {
      return http.get(`/launches?limit=100`);
    },

    getSpaceXRecords: (year, launch_success, land_success, setUrl) => {
      const updatedURL = makeUrl(year, launch_success, land_success);

      if (year !== 0 || launch_success !== null || land_success !== null) {
        setUrl(updatedURL);
        return http.get(updatedURL);
      } else {
        setUrl('/launches?limit=100');
        return http.get(`/launches?limit=100`);
      }
    }
  };
};

const isNull = str => str === null;

const isNumberEqualTo0 = num => typeof num === 'number' && num === 0;

export const makeUrl = (year_date, launch_success, land_success) => {
  const baseUrl = `/launches?limit=100`;
  const launch = isNull(launch_success)
    ? ''
    : `&launch_success=${launch_success}`;
  const land = isNull(land_success) ? '' : `&land_success=${land_success}`;
  const year = isNumberEqualTo0(year_date) ? '' : `&launch_year=${year_date}`;
  const newUrl = baseUrl + launch + land + year;
  return newUrl;
};
