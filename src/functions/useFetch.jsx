import { useState, useEffect } from "react";

const useFetch = (url, optionsObj) => {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    try {
      fetch(`http://localhost:3000/${url}`, optionsObj)
        .then((response) => {
          if (!response.ok) throw Error("Did not receive expected data");
          return response.json();
        })
        .then((data) => setData(data));
    } catch (err) {
      setFetchError(err);
      console.log("err: ", err);
      alert(`fetchError: ${fetchError}`);
    } finally {
      setFetchError(null);
    }
  }, [url]);

  return [data];
};

export default useFetch;
