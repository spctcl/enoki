import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

import { FlowCardBalance, FlowCardButton, FlowCardList, FlowCardListGroup, FlowCardListLabel, FlowCardTippyContainer, FlowCardTitle } from './FlowCards.styled';
export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        id="owner-handle-a"
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
        Owner
      </FlowCardTitle>

      <FlowCardListGroup>
        <FlowCardListLabel>Sensors:</FlowCardListLabel>
        <FlowCardList className="nodrag" type="text" />
      </FlowCardListGroup>

      <FlowCardListGroup>
        <FlowCardListLabel>Subscribed Data Clients:</FlowCardListLabel>
        <FlowCardList className="nodrag" type="text" />
      </FlowCardListGroup>

      <FlowCardListGroup>
        <FlowCardListLabel>Balance:</FlowCardListLabel>
        <FlowCardBalance className="nodrag" type="text" />
      </FlowCardListGroup>
      <FlowCardListGroup>
        <FlowCardButton onClick={() => console.log("clicked")}>Start Data Stream</FlowCardButton>
      </FlowCardListGroup>

      <Handle
        type="source"
        position="right"
        id="owner-handle-b"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="owner-handle-c"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
