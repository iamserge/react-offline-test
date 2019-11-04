import React from 'react';
import {render} from '@testing-library/react'
import Header, { title, formatDate } from './Header';

const testData = {
  to: "2019-11-03T22:30Z",
  from: "2019-11-03T22:00Z"
}


describe('Header', () => {

  it("renders title ", () => {
    const {queryByText} = render(
      <Header data={testData}/>
    )
    expect(queryByText(title)).not.toBeNull()
  });

  it("converts date correctly", () => {
    //not really a valid test as it in Header I am using toLocaleDateString which is different in node environment - http://stackoverflow.com/a/23200062/6176714
    expect(formatDate(testData.to)).toEqual("11/3/2019 22:30");
  });

  it("renders date from correctly", () => {
    const {queryByText} = render(
      <Header data={testData}/>
    )
    expect(queryByText(formatDate(testData.to))).not.toBeNull()
  });

  it("renders date to correctly", () => {
    const {queryByText} = render(
      <Header data={testData}/>
    )
    expect(queryByText(formatDate(testData.from))).not.toBeNull()
  });

 

})
