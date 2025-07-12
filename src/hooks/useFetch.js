import {useState, useEffect } from 'react';

import React from 'react'

const useFetch = (url, option= {}) => {


  const[data, setData] = useState(null);
  const[pending, setPending] = useState(true);
  const[error, setError] = useState(null);

  useEffect(()=>{
    if(!url) return

    const controller = new AbortController()
    const signal = controller.signal

  const fetchData = async ()=> {
    try {   
      let response = await fetch(url,{...option, signal});
      if(!response.ok) throw Error('Error Fetching Data !');
        let result = await response.json();
      setData(result);
      setPending(false);

    } catch (error) {
      setError(`${error} Occured. Please try again`);
      setPending(false);
    };
  };
    fetchData()
    return ()=> controller.abort()
  }
  ,[url,option]);

  return {pending,data,error}
}

export default useFetch