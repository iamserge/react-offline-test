import useFetch from './useFetch';
import fetchMock from 'fetch-mock';
import { renderHook } from "@testing-library/react-hooks";

const responseBody = {
    data: 'data from the server'
};

describe('testing fetch', () => {
    
    beforeEach(() => {
        fetchMock.mock('*', {
            status: 200,
            data: JSON.stringify(responseBody),
            statusText: 'OK',
        });
    })
   
    it('calls api', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('/generation'));    
        await waitForNextUpdate();
        expect(JSON.parse(result.current[0])).toEqual(responseBody);
    })

    it('sets loading state correctly', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('/generation'));   
        expect(result.current[2]).toEqual(true); 
        await waitForNextUpdate();
        expect(result.current[2]).toEqual(false);
    })

    it('sets error correctly on success', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('/generation'));   
        expect(result.current[1]).toEqual(false); 
        await waitForNextUpdate();
        expect(result.current[1]).toEqual(false);
    })

    it('sets params correctly on failure', async () => {
        fetchMock.restore();
        fetchMock.mock('*', {
            status: 400
        });
        const { result, waitForNextUpdate } = renderHook(() => useFetch('/generation'));   
        expect(result.current[1]).toEqual(false); 
        await waitForNextUpdate();
        expect(result.current[0]).toEqual({});
        expect(result.current[1]).toEqual(true);
        expect(result.current[2]).toEqual(false);
    })

    afterEach(() => {
        fetchMock.restore();
    })

})