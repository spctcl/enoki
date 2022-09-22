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
        id="data-client-handle-a"
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
        Data Client
      </FlowCardTitle>

      <FlowCardListGroup>
        <FlowCardListLabel>Incoming Data:</FlowCardListLabel>
        <FlowCardList className="nodrag" type="text" />
      </FlowCardListGroup>

      <FlowCardListGroup>
        <FlowCardListLabel>Balance:</FlowCardListLabel>
        <FlowCardBalance className="nodrag" type="text" />
      </FlowCardListGroup>
      <FlowCardListGroup>
        <FlowCardButton onClick={() => console.log("clicked")}>Start</FlowCardButton>
      </FlowCardListGroup>

      <Handle
        type="source"
        position="right"
        id="data-client-handle-b"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="data-client-handle-c"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
