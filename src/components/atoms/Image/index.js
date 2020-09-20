import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from '@emotion/styled';

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Wrapped = styled.div`
  background-color: #f2f2f2;
  width: 90%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Placeholder = styled.div``;

const Image = ({ url, alt }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <Wrapped>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <Img
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={url}
          alt={alt}
        />
      </LazyLoad>
    </Wrapped>
  );
};

export default Image;
