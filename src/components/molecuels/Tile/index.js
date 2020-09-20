import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import styled from '@emotion/styled';

// atoms
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';
import List from '../../atoms/List';

const Wrapped = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.31);
  background-color: white;
  border-radius: 10px;
`;

const ImageWrapper = styled(Image)`
  width: 200px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ padding }) => padding || 0};
`;

const Tile = ({
  records: {
    links,
    mission_name,
    flight_number,
    launch_year,
    launch_success,
    mission_id = []
  }
}) => {
  return (
    <Wrapped aria-label="detail card">
      <ImageWrapper url={links.mission_patch} alt={mission_name} />
      <CardContent>
        <Label text={`${mission_name} #${flight_number}`} color="#001399" />

        {mission_id.length > 0 && (
          <Label
            text="Mission ids:"
            color="black"
            fontWeight="700"
            customStyle={{ paddingTop: 10 }}
          />
        )}
        <List
          missionIds={mission_id}
          color="black"
          fontWeight={500}
          customStyle={{ paddingLeft: 25, margin: '10px 0px' }}
        />
        <Row>
          <Label
            text="Launch years:"
            color="black"
            fontWeight={600}
            customStyle={{ paddingTop: 10 }}
          />
          <Label
            text={launch_year}
            color="blue"
            fontWeight={300}
            customStyle={{ paddingLeft: 5, paddingTop: 10 }}
          />
        </Row>

        <Row padding={'10px 0'}>
          <Label text="Successful Launch:" color="black" fontWeight={600} />
          <Label
            text={launch_success ? 'true' : 'false'}
            color="blue"
            fontWeight={300}
            customStyle={{ paddingLeft: 5 }}
          />
        </Row>
        <Row>
          <Label text="Successful Landing:" color="black" fontWeight={600} />
          <Label
            text="false"
            color="blue"
            fontWeight={300}
            customStyle={{ paddingLeft: 5 }}
          />
        </Row>
      </CardContent>
    </Wrapped>
  );
};

export default Tile;
