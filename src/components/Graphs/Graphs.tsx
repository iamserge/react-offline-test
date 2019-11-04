import React, {useState} from 'react';
import Graph from '../Graph/Graph';

import './Graphs.scss';



export default ({data}) => {
  let graphsData = data.generationmix;
  graphsData = graphsData.sort((graphDataA, graphDataB)=>{
    return graphDataB.perc - graphDataA.perc
  })
  return (
    <div className="graphs">
      {graphsData && graphsData.map((graphData)=>{
        return (
          <Graph data={graphData} key={graphData.fuel} />
        )
      })}
    </div>
  )
}
