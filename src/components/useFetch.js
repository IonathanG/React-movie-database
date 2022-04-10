import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // const abortCont = new AbortController();
    // axios.get(url, { signal: abortCont.signal })

    axios.get(url).then((res) => {
      setData(res.data.results);
      setIsLoading(false);
      //console.log(res.data.results);
    });
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
