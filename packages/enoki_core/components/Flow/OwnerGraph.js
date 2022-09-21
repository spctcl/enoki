import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';
import { OwnerGraphCardInput, OwnerGraphCardTitle } from './OwnerGraph.styled';
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
      <OwnerGraphCardTitle>
        Owner Graph: <strong>{data.color}</strong>
      </OwnerGraphCardTitle>
      <OwnerGraphCardInput className="nodrag" type="text" />
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />

      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
