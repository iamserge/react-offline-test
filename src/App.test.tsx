import React from 'react';
import {render} from '@testing-library/react'
import App from './App';
import fetchMock from 'fetch-mock';
import mockJson from '../example_api_response.json';
import { act } from 'react-dom/test-utils';
const testMessage = 'Sorry, something went wrong, please try again later';

describe('App', () => {

  it("renders without crashing", () => {
    const {queryByText} = render(
      <App apiUrl={'test'}/>
    )
    expect(queryByText(testMessage)).not.toBeNull()
  });

  it("loading once fetch is mocked", () => {
    act(()=>{
      fetchMock.mock('*', {
        status: 200,
        data: mockJson,
        statusText: 'OK',
      });
      const {queryByText} = render(
        <App apiUrl={'test'}/>
      )
      expect(queryByText('Loading...')).not.toBeNull();
    })
  });

})
