import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { addEdge, Controls, MiniMap, useEdgesState, useNodesState } from 'react-flow-renderer';

import { default as DataClientNode } from './DataClientNode';
import { default as OwnerNode } from './OwnerNode';
import { default as RawDataNode } from './RawDataNode';
import { default as SensorNode } from './SensorNode';
import { default as ValidatorNode } from './ValidatorNode';


// import styles from './index.scss';

const FlowCardStyles = {
  color: 'white',
  border: '1px solid #222138',
  minHeight: 250,
  width: 250,
  padding: 8,
  borderRadius: 12
}

const initBgColor = '#1A192B';
const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [20, 20];
const nodeTypes = {
  sensorNode: SensorNode,
  rawDataNode: RawDataNode,
  dataClientNode: DataClientNode,
  validatorNode: ValidatorNode,
  ownerNode: OwnerNode,
};

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
    const onChange = (event) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== '2') {
            return node;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: 'sensor-node',
        type: 'sensorNode',
        data: { label: 'An input node' },
        position: { x: 0, y: 0 },
        sourcePosition: 'right',
        style: {
          ...FlowCardStyles,
          background: 'gray',
        },
      },
      {
        id: 'raw-data-node',
        type: 'rawDataNode',
        // data: { onChange: onChange, color: initBgColor },
        position: { x: 0, y: 350 },
        style: {
          ...FlowCardStyles,
          background: '#073EFF',
        },
      },
      {
        id: 'owner-node',
        type: 'ownerNode',
        data: { label: "Owner Card" },
        style: {},
        position: { x: 0, y: 650 },
        style: {
          ...FlowCardStyles,
          background: '#CD07FF',
        },
      },
      {
        id: 'validator1-node',
        type: 'validatorNode',
        // data: { label: 'Output A' },
        position: { x: 300, y: 650 },
        targetPosition: 'left',
        style: {
          ...FlowCardStyles,
          minHeight: 120,
          background: '#8307FF',
        },
      },
      {
        id: 'data-client-node',
        type: 'dataClientNode',
        position: { x: 650, y: 100 },
        targetPosition: 'left',
        style: {
          ...FlowCardStyles,
          minHeight: 120,
          background: '#8307FF',
        },

      },
    ]);

    setEdges([
      {
        id: 'e1-2',
        source: 'sensor-node',
        target: 'raw-data-node',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e2a-3',
        source: 'raw-data-node',
        target: 'owner-node',
        sourceHandle: 'raw-data-handle-b',
        animated: true,
        style: { stroke: '#fff' },
      },
      {
        id: 'e2b-4',
        source: 'raw-data-node',
        target: 'validator1-node',
        sourceHandle: 'raw-data-handle-b',
        animated: true,
        style: { stroke: '#fff' },
      },
    ]);
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
    []
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      style={{ background: bgColor }}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultZoom={1.5}
      fitView
      attributionPosition="bottom-left"
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'selectorNode') return bgColor;
          if (n.type === 'output') return '#ff0072';
        }}
        nodeColor={(n) => {
          if (n.type === 'selectorNode') return bgColor;
          return '#fff';
        }}
      />
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
