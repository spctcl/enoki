import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

import { FlowCardList, FlowCardListGroup, FlowCardListLabel, FlowCardTippyContainer, FlowCardTitle } from './FlowCards.styled';
export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        id="raw-data-handle-a"
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
        Raw Data
      </FlowCardTitle>

      <FlowCardListGroup>
        <FlowCardListLabel>Contains:</FlowCardListLabel>
        <FlowCardList className="nodrag" type="text" />
      </FlowCardListGroup>

      <Handle
        type="source"
        position="right"
        id="raw-data-handle-b"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="raw-data-handle-c"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
