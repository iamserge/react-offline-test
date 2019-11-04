import React from 'react';
import {render} from '@testing-library/react'
import Graph from './Graph';

const testData = {"fuel":"biomass","perc":8.6}

describe('Graph', () => {

  it("renders correct name ", () => {
    const {getByText} = render(
      <Graph data={testData}/>
    )
    expect(getByText(testData.fuel)).not.toBeNull();
  });

  it("renders correct percentage ", () => {
    const {getByText, baseElement} = render(
      <Graph data={testData}/>
    )
    expect(baseElement.innerHTML.indexOf(`height: ${testData.perc}%`)).not.toEqual(-1);
  });

})
