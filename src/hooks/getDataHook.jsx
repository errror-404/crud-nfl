import { useState, useEffect } from "react";
import { BaseApiUrl } from "../api/BaseUrl";

export const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await BaseApiUrl.get(url);

        setData(response.data);
        console.log(response.data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, error, loading };
};
