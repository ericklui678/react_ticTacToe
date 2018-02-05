import React from 'react';

const Cell = (props) => {
  const cellStyle = {
    'paddingBottom': '33%'
  };
  return (
    <div
      className='col border border-dark'
      style={cellStyle}
      onClick={() => props.onClick(props.id)}>
      {props.value}
    </div>
  );
};

export default Cell;
