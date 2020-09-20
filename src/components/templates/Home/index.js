import React from 'react';

import { api } from '../../../api';
import DetailCard from '../../organisms/DetailCard';

import { useRouter } from 'next/router'

const Home = props => {
  const router = useRouter()
  return <DetailCard {...props} searchURL={router} />;
};

Home.fetchData = () => {
  return api.records.onLoad().then(records => {
    return {
      records
    };
  });
};

export default Home;
