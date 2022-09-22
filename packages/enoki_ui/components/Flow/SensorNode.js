import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

import { FlowCardList, FlowCardListGroup, FlowCardListLabel, FlowCardStatus, FlowCardTippyContainer, FlowCardTitle } from './FlowCards.styled';
export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <FlowCardTippyContainer>
        <Tooltip title={<span>Hello this is some info, heh?</span>}>
          <InfoIcon />
        </Tooltip>
      </FlowCardTippyContainer>

      <FlowCardTitle>
        Sensor
        <FlowCardStatus>Active</FlowCardStatus>
      </FlowCardTitle>

      <FlowCardListGroup>
        <FlowCardListLabel>Type:</FlowCardListLabel>
        <FlowCardList className="nodrag" type="text" />
      </FlowCardListGroup>

      <FlowCardListGroup>
        <FlowCardListLabel>Location:</FlowCardListLabel>
        <FlowCardList className="nodrag" type="text" />
      </FlowCardListGroup>

      <Handle
        type="source"
        position="right"
        id="sensor-handle-a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="sensor-handle-b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
