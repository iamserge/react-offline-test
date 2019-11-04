import React from 'react';
import useFetch from './hooks/useFetch';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Graphs from './components/Graphs/Graphs';


export default ({apiUrl}) => {

  const [data, error, loading] = useFetch(apiUrl);
  
  return (
    <div className="App">
        {loading ? (
          <Loader />
        ) : (
          <>
            {
              error ? (
                <Error />
              ) : (
                <>
                  <Header data={data} /> 
                  <Graphs data={data} />
                </>
              )
            }
          </>
        )}
    </div>
  );
}
