import React from 'react';
import withCount from '../hoc/withCount';

const Counter = ({ count, upCount, downCount }) => {
  return (
    <div>
      <div className="btn btn-danger" onClick={() => downCount()}>
        -
      </div>
      <div className="btn btn-info">{count}</div>
      <div className="btn btn-success" onClick={() => upCount()}>
        +
      </div>
    </div>
  );
};

export default withCount(Counter);
