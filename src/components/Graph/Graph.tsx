import React, {useState} from 'react';
import './Graph.scss';



export default ({data}) => {
  const percentage = data.perc;
  const name = data.fuel;
  return (
    <div className="graph" data-percentage={percentage}>
      <div className="graph__fullBar">
        <div className="graph__percentageBar" style={{height: `${percentage}%`}}></div>
        <div className="graph__percentageValue" style={{bottom: `${percentage}%`}}>{percentage}%</div>
      </div>
      <h3 className="graph__name">{name}</h3>
    </div>
  )
}
