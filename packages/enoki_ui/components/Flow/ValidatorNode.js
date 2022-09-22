import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

import { FlowCardTippyContainer, FlowCardTitle } from './FlowCards.styled';
export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        id="validator1-handle-a"
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
        Validator #1
      </FlowCardTitle>

      <Handle
        type="source"
        position="right"
        id="validator1-handle-b"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="validator1-handle-c"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
