import { useState, useEffect } from "react";

const useFetch = (url, optionsObj) => {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:3000/${url}`;
    try {
      fetch(apiUrl, optionsObj)
        .then((response) => {
          if (!response.ok) throw Error("Did not receive expected data");
          return response.json();
        })
        .then((data) => setData(data));
    } catch (err) {
      setFetchError(err);
      alert("err: ", err);
      alert(`fetchError: ${fetchError}`);
    } finally {
      setFetchError(null);
    }
  }, [url]);

  return [data];
};

export default useFetch;
