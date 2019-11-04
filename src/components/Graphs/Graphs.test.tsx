import React from 'react';
import {render} from '@testing-library/react'
import Graphs from './Graphs';

const testData = {"generationmix": [{"fuel":"biomass","perc":8.6},{"fuel":"coal","perc":2.7},{"fuel":"imports","perc":9.6},{"fuel":"gas","perc":38.5},{"fuel":"nuclear","perc":24.3},{"fuel":"other","perc":0.4},{"fuel":"hydro","perc":1.4},{"fuel":"solar","perc":0},{"fuel":"wind","perc":14.5}]}

describe('Graphs', () => {

  it("renders correct number of graphs ", () => {
    const {baseElement} = render(
      <Graphs data={testData}/>
    )
    expect(baseElement.getElementsByClassName('graph').length).toEqual(testData.generationmix.length)
  });

  it("sorts fuel types correctly ", () => {
    const {baseElement} = render(
      <Graphs data={testData}/>
    )
    const firstElementPercentage : any = parseFloat(baseElement.getElementsByClassName('graph')[0].getAttribute('data-percentage'));
    const lastElementPercentage : any = parseFloat(baseElement.getElementsByClassName('graph')[testData.generationmix.length - 1].getAttribute('data-percentage'));
    expect(lastElementPercentage - firstElementPercentage).toBeLessThan(0)
  });

 

})
